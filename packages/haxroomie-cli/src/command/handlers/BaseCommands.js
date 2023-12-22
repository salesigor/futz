const CommandHandler = require('../CommandHandler');
const commandPrompt = require('../../command-prompt');
const colors = require('colors/safe');
const { logger } = require('haxroomie-core');

class BaseCommands extends CommandHandler {
  constructor({ roomContext }) {
    super();

    this.room = roomContext.room;
    this.haxroomie = roomContext.haxroomie;
    this.setRoom = roomContext.setRoom;
    this.openRoom = roomContext.openRoom;
    this.closeRoom = roomContext.closeRoom;
    this.createRoom = roomContext.createRoom;
    this.config = roomContext.config;
  }

  onCommand_rooms() {
    return {
      description: 'Prints available rooms and information about them.',
      category: 'Basic commands',
      run: async () => {
        let rooms = this.haxroomie.getRooms();
        rooms = await Promise.all(
          rooms.map(async (r) => {
            let id = 'ID: ' + colors.cyan(r.id);

            if (!r.usable) {
              return (
                `${id} Status: ${colors.red('not usable')} ` +
                `try to reinitialize with "init ${r.id}"`
              );
            }
            let isRunning = r.running
              ? 'Status: ' + colors.green('running')
              : 'Status: ' + colors.yellow('stopped');
            if (!r.running) return `${id} ${isRunning}`;

            let roomLink = 'Link: ' + colors.cyan(r.roomInfo.roomLink);
            let maxPlayers = r.roomInfo.maxPlayers;
            let playerList = await r.callRoom('getPlayerList');
            let playersLength =
              playerList.length - (r.roomInfo.noPlayer ? 0 : 1);
            let players = colors.cyan(playersLength + '/' + maxPlayers);
            let amountOfPlayers = `Players: ${players}`;

            return `${id} ${isRunning} ${amountOfPlayers} ${roomLink}`;
          })
        );
        commandPrompt.print(rooms.join(`\n`));
      },
    };
  }

  onCommand_setroom() {
    return {
      description: `Selects which room to control using its id (see ${colors.cyan(
        'rooms'
      )}).`,
      args: ['id'],
      category: 'Basic commands',
      run: async (id) => {
        let room = this.haxroomie.getRoom(id);
        if (!room) {
          commandPrompt.print(`Invalid room id`, `ERROR`);
          return;
        }
        await this.setRoom(room);
        commandPrompt.print(`Now controlling room ${colors.cyan(room.id)}.`);
      },
    };
  }

  onCommand_open() {
    return {
      description: `Opens room with given id (see ${colors.cyan(
        'rooms'
      )} for the ids).`,
      alias: ['start'],
      args: ['id'],
      category: 'Basic commands',
      run: (id) => {
        const room = this.haxroomie.getRoom(id);
        if (room.running) {
          commandPrompt.print(
            `The room is already running. Close it before opening!`
          );
          return;
        }
        return this.openRoom(id);
      },
    };
  }

  onCommand_close() {
    return {
      description: `Closes room with given id (see ${colors.cyan(
        'rooms'
      )} for the ids).`,
      args: ['id'],
      alias: ['stop'],
      category: 'Basic commands',
      run: async (id) => {
        return this.closeRoom(id);
      },
    };
  }

  onCommand_reload() {
    return {
      description:
        'Reloads the config and restarts the rooms that were modified (if needed).',
      category: 'Basic commands',
      run: async () => {
        const reloadInfo = this.config.reload();
        const { oldConfig, newConfig, modifiedRooms } = reloadInfo;

        if (modifiedRooms.size > 0) {
          let rooms = [];
          for (let roomId of modifiedRooms.keys()) {
            rooms.push(colors.cyan(roomId));
          }
          let roomsString = rooms.join(', ');
          commandPrompt.print(
            `Rooms (${roomsString}) were modified.`,
            'RELOAD CONFIG'
          );
        } else {
          commandPrompt.print(`No rooms were modified.`, 'RELOAD CONFIG');
          return;
        }

        await this.reloadRooms(oldConfig, newConfig, modifiedRooms);
      },
    };
  }

  async reloadRooms(oldConfig, newConfig, modifiedRooms) {
    for (let [roomId, modifiedProperties] of modifiedRooms) {
      // Remove removed rooms.
      if (modifiedProperties === null) {
        this.haxroomie.removeRoom(roomId);
        continue;
      }

      // Add new rooms.
      if (!this.haxroomie.hasRoom(roomId)) {
        await this.createRoom(roomId);
        let roomConfig = this.config.getRoomConfig(roomId);
        if (roomConfig.autoStart) {
          await this.openRoom(roomId);
        }
        continue;
      }

      let room = this.haxroomie.getRoom(roomId);

      // Update repositories.
      if (modifiedProperties.includes('repositories')) {
        commandPrompt.print(
          `Updating repositories of ${colors.cyan(roomId)}.`,
          'RELOAD CONFIG'
        );
        try {
          await room.repositories.setRepositories(
            newConfig[roomId].repositories
          );
        } catch (err) {
          commandPrompt.print(err.message);
          logger.debug(err.stack);
        }
      }

      // Reload running rooms.
      if (room.running) {
        const cannotHotLoad = modifiedProperties.some((p) => {
          return p !== 'pluginConfig' && p !== 'repositories';
        });

        // Restart rooms that cannot be hotloaded and bail out early.
        if (cannotHotLoad) {
          await this.closeRoom(roomId);
          await this.openRoom(roomId);
          continue;
        }

        // Update pluginConfig.
        commandPrompt.print(
          `Updating pluginConfig of ${colors.cyan(roomId)}.`,
          'RELOAD CONFIG'
        );
        try {
          await room.plugins.setPluginConfig(newConfig[roomId].pluginConfig);
        } catch (err) {
          commandPrompt.print(err.message);
          logger.debug(err.stack);
        }

        // Reload all plugins.
        commandPrompt.print(
          `Reloading plugins of ${colors.cyan(roomId)}.`,
          'RELOAD CONFIG'
        );
        try {
          const loadedPlugins = await room.plugins.getPlugins();
          for (let plugin of loadedPlugins) {
            // The sav/players plugin cannot be reloaded because a bug in the plugin.
            // See https://github.com/saviola777/hhm-plugins/issues/19
            if (plugin.name === 'sav/players') {
              continue;
            }
            await room.plugins.reloadPlugin(plugin.name);
          }
        } catch (err) {
          commandPrompt.print(err.message);
          logger.debug(err.stack);
        }
      }
    }
  }
  onCommand_link() {
    return {
      description: 'Get the room link.',
      disabled: !this.room.running,
      category: 'Room control',
      run: () => {
        if (!this.room.running) {
          commandPrompt.print(`Room is not running!`);
          return;
        }
        commandPrompt.print(this.room.roomInfo.roomLink);
      },
    };
  }

  onCommand_chat() {
    return {
      description: 'Sends a chat message to the room.',
      disabled: !this.room.running,
      args: ['msg'],
      category: 'Room control',
      run: async (msg) => {
        if (!msg && msg !== 0) return;
        commandPrompt.print(`MSG to ${this.room.id}: ${msg}`);
        await this.room.callRoom(
          'sendAnnouncement',
          msg,
          null,
          0xffffff,
          'bold'
        );
      },
    };
  }

  onCommand_players() {
    return {
      description: 'Prints players in the room.',
      disabled: !this.room.running,
      category: 'Room control',
      run: async () => {
        let playerList = await this.room.callRoom('getPlayerList');
        playerList = playerList.filter((p) => p && p.id !== 0);

        let players = [`${playerList.length}/${this.room.roomInfo.maxPlayers}`];

        for (let player of playerList) {
          if (!player) continue;
          let playerString = `nickname: ${colors.cyan(player.name)}`;
          if (player.admin) {
            playerString += ' ' + colors.green('admin');
          }
          playerString += `\n  id: ${player.id}`;
          if (player.auth) {
            playerString += `\n  auth: ${player.auth}`;
          }

          try {
            let roles = await this.room.roles.getPlayerRoles(player.id);
            if (roles && roles.length > 0) {
              playerString += `\n  roles: ${roles.join(',')}`;
            }
          } catch (e) {
            // if we are here it probably means roles plugin wasnt enabled
          }

          players.push(playerString);
        }
        commandPrompt.print(players.join(`\n`), `PLAYERS`);
      },
    };
  }
}
module.exports = BaseCommands;
