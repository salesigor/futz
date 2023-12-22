/* VARIABLES */

/* ROOM */

const roomName = "🏆 3x3 Futsal ⚽ | Cola na humildade"; // nome sugerido: 🏆 3x3 Futsal ⚽ | Cola na humildade
const botName = "🤖";
const maxPlayers = 15;
const roomPublic = true; // nao esquece de colocar true, maluco!
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimit = 3;
const timeLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
var adminPassword = "true";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

/*room.setCustomStadium(x3);*/
const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;

/* UNIFORMS */

const Uniform = [];
const ale = {'name': 'Alemanha', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF,};
const arg = {'name': 'Argentina', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "emoji": '🟢🟡🔵', "angle": 360, "textcolor": 0x27965A, "color1": 0xDBB71B, "color2": 0xDBB71B, "color3": 0xDBB71B};
const esp = {'name': 'Espanha', "type": Uniform, "emoji": '🔴🟡🔴', "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "emoji": '🟢🔴🔴', "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Italia', "type": Uniform, "emoji": '🟢⚪🔴', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "emoji": '⚪🔵⚪', "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "emoji": '🔵⚪🔴', "angle": 90, "textcolor": 0xF5F9F6, "color1": 0x265ECF, "color2": 0x384355, "color3": 0x384355};
const ing = {'name': 'Inglaterra', "type": Uniform, "emoji": '⚪🔴⚪', "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};
const uniformIds = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel];
let randomUniformId = Math.floor(Math.random() * uniformIds.length);
let homeUniformId = uniformIds[randomUniformId];
let guestUniformId = uniformIds[(randomUniformId + 3)];
let nameHome = homeUniformId.name;
let acronymHome = homeUniformId;
let emojiHome = homeUniformId.emoji;
let nameGuest = guestUniformId.name;
let acronymGuest = guestUniformId;
let emojiGuest = guestUniformId.emoji;
room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);

/* OPTIONS */

var drawTimeLimit = 1; //minutos
var maxTeamSize = 4;
var yellow = 0xffeb15;
var white = 0xFFFFFF;
var green = 0x19d459;
var red = 0xed4a3e;
var blue = 0x3e84ed;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];

/* STATS */

var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var winner = [];
var lastWinner = Team.SPECTATORS;
var streak = 0;
var goalsHome = [];
var goalsGuest = [];

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;

/* FUNCTIONS */

function getNextHomeUniform() {
    const uniformId = uniformIds[homeUniformIndex];
    homeUniformIndex = (homeUniformIndex + 1) % uniformIds.length;
    return uniformId;
};

function getNextGuestUniform() {
    const uniformId2 = uniformIds[guestUniformIndex];
    guestUniformIndex = (guestUniformIndex + 1) % uniformIds.length;
    return uniformId2;
};

function sendAnnouncement(announcement) {
    room.sendAnnouncement(announcement, null, white, "bold", 1);
};

function sendRandomAnnouncement(messages, color, fontWeight) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    sendAnnouncement(randomMessage, white, "bold");
};

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
};

function docketFormat(string1, string2) {
    if (string1 !== undefined && string2 === undefined) {
        var space = 53 - (string1.length) * 0.8;
        return ' '.repeat(space) + string1
    } else if (string2 !== undefined && string1 === undefined) {
        return ' '.repeat(77) + string2
    } else if (string2 !== undefined && string1 !== undefined) {
        var space = 16 - (string1.length + 10 + string2.length)
        return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
    } else if (string1 === undefined && string2 === undefined) {
        return ''
    }
};

function getUniform(uniformStr) {
    if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
    for (const [key, value] of Object.entries(uniforms)) {
        for (let i = 0; i < value.aliases.length; i++) {
            if (value.aliases[i] === uniformStr) return key;
        }
    }
    return false;
};

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
};

function arrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};

function getTime() {
	const scores = room.getScores();
	var min = parseInt(scores.time / 60);
	var sec = parseInt(scores.time) - min * 60;
	return `[${min}' ${sec}"]`
};

function docketFormat(string1, string2) {
	if (string1 !== undefined && string2 === undefined) {
		var space = 53 - (string1.length) * 0.8;
		return ' '.repeat(space) + string1
	} else if (string2 !== undefined && string1 === undefined) {
		return ' '.repeat(77) + string2
	} else if (string2 !== undefined && string1 !== undefined) {
		var space = 16 - (string1.length + 10 + string2.length)
		return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
	} else if (string1 === undefined && string2 === undefined) {
		return ''
	}
    centerText();
};

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
};

/* BUTTONS */

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
};

function resetBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
};

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
};

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
};

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
};

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        goldenGoal = true;
        var messages = [
            "Se liga, a prorrogação é de " + drawTimeLimit * 60 + " segundos!",
            "Vou dar " + drawTimeLimit * 60 + " segundos de prorrogação, rapa!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
        var messagens = [
            "⚽ Primeiro GOL vence! ⚽",
            "⚽ Quem fizer leva! ⚽",
            "⚽ Boraa, decisivo! Fez, ganhou! ⚽",
        ];
        var randomIndex = Math.floor(Math.random() * messagens.length);
        var announcement = messagens[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 segundos para o empate! ⌛"), null, yellow, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
};

/* PLAYER FUNCTIONS */

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
};

function updateAdmins() {
    if (players.length == 0 || players.find((player) => player.admin) != null) {
        return;
    }
    var copie = [];
    players.forEach(function (element) { copie.push(element.id); });
    room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
};

function updateList(number, team) {
    if (room.getScores() != null) {
        if (team == Team.RED) {
            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));
        }
        else if (team == Team.BLUE) {
            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
        }
    }
};

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                lastTeamTouched = players[i].team;
            }
        }
    }
};

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = i;
                k[1] = teamR[i].position.x;
            }
        }
        GKList[k[0]]++;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = i;
                k[1] = teamB[i].position.x;
            }
        }
        GKList[maxPlayers + k[0]]++;
    }
};

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    var messages = [
        "👋 Salve, " + player.name + "!",
        "👋 Eae, " + player.name + "!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    updateTeams();
    updateAdmins();
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
    room.sendAnnouncement(centerText("Comandos: !help, !regras, !discord, !verdade"), player.id, yellow, "normal");
    room.sendAnnouncement(centerText("Comemorações: !gol, !ain, !chupa, !soberbo"), player.id, yellow, "normal");
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
    }
    updateTeams();
};

room.onPlayerLeave = function (player) {
    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
    updateAdmins();
    var messages = [
        "Vixi, " + player.name + " vazou!",
        "Voltaaaaaa, " + player.name + "!",
        "Aaaah, " + player.name + " arregou essas hora!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    var mensagem = message;
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Comandos: !help, !regras, !discord, !verdade"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Comemorações: !gol, !ain, !chupa, !soberbo"), null, yellow, "normal");
    }
    else if (["!regras"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("REGRAS DE JOGO"), null, white, "bold");
        room.sendAnnouncement(centerText("3x3 por 3minutos + 1minuto de prorrogação"), null, yellow, "normal");
        room.sendAnnouncement(centerText("FAIR PLAY pra ficar dahora"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão do time é o player1"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão escolhe o time com número da fila ou nome"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Uma vez escolhido fica até o final"), null, yellow, "normal");
        room.sendAnnouncement(centerText("AFK vai pro final da fila e pausamos pro cap escolher outro"), null, yellow, "normal");
    }
    else if (["!discord"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("    Ta aí nosso server!"), null, white, "normal");
        room.sendAnnouncement(centerText(" https://discord.gg/HbQ5Mvad "), null, white, "bold");
        room.sendAnnouncement(centerText(" Mantém o respeito, na moral!"), null, white, "normal");
    }
    else if (["!soberbo"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("🍫 SOBEEEERBOOOOOOO! 🍫"), null, yellow, "bold");
    }
    else if (["!ain"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(player.name + ": AINN, PAI PARAAA!", null, yellow, "bold");
    }
    else if (["!gol"].includes(message[0].toLowerCase())) {
        var messages = [
            "LAAAAÇO! ⚽",
            "GOLAAAAÇO! ⚽",
            "É GOOOOL! ⚽",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
    }
    else if (["!chupa"].includes(message[0].toLowerCase())) {
        var messages = [
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa, Lady Gaga! 👱‍♀️",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
    }
    else if (["!verdade"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é ruim pra caramba!"), null, yellow, "bold");
    }
    else if (["!adm"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            adminPassword = "true";
            console.log("adminPassword : " + adminPassword);
        }
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 3 || message.length == 4) {
                if (["R", "B", "S"].includes(message[1])) {
                    var timeOut;
                    if (message[1] == "R") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamR.length && Number.parseInt(message[2]) > 0) {
                                if (teamR[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamR[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamR[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamR[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamR[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                    if (message[1] == "B") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamB.length && Number.parseInt(message[2]) > 0) {
                                if (teamB[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamB[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamB[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamB[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamB[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                    if (message[1] == "S") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamS.length && Number.parseInt(message[2]) > 0) {
                                if (teamS[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamS[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamS[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamS[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamS[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 2 && message[1] == "all") {
                muteList = [];
                room.sendAnnouncement(centerText("Desmutado."), null, yellow, "normal");
            }
            if (message.length >= 2) {
                var name = "";
                for (var i = 1; i < message.length; i++) {
                    name += message[i] + " ";
                }
                name = name.substring(0, name.length - 1);
                muteList.length != muteList.filter((p) => p != name).length ? room.sendAnnouncement(centerText(name + " foi desmutado.")) : null;
                muteList = muteList.filter((p) => p != name);
            }
        }
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.clearBans();
            room.sendAnnouncement(centerText("Banimentos apagados"), null, yellow, "normal");
        }
    }
    else if (["!bb, !bye, !cya, !gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Flw!", false);
    }
    if (message[0][0] == "!") {
        return false;
    }
    if (muteList.includes(player.name)) {
        room.sendAnnouncement(centerText("Você foi mutado.", player.id), null, yellow, "normal");
        return false;
    }
    if (player.admin == true) {
        room.sendAnnouncement("Admin | " + player.name + ": " + mensagem, null, yellow, "bold", 2);
        return false;
    }
    if (player.team === Team.RED) {
        room.sendAnnouncement(nameHome + " | " + player.name + ": " + mensagem, null, red, "bold", 1);
        return false;
    }
    if (player.team === Team.BLUE) {
        room.sendAnnouncement(nameGuest + " | " + player.name + ": " + mensagem, null, blue, "bold", 1);
        return false;
    }
    else {
        room.sendAnnouncement(player.name + ": " + mensagem, null, white, "normal", 1);
        return false;
    }
};

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    GKList = new Array(2 * maxPlayers).fill(0);
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;
    room.sendAnnouncement(centerText(`🥅🥅 PARTIDA INICIANDO 🥅🥅`), null, yellow, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} X ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
	if (streak !== 0) {
		room.sendAnnouncement(centerText(`     📢 ${nameHome} está invicto 📢`), null, white, "bold", 0);
		room.sendAnnouncement(centerText(`     📢 Sequência de ${streak} jogo(s) 📢`), null, white, "bold", 0);
	}
};

room.onGamePause = function (byPlayer) {
    setTimeout(function () {
        var messages = [
            "Calma aê, vamo resolver e já voltamos. Não enche! kkk",
            "VAR ta analizando, calma... kk",
            "Calma aê, rapa. Rapidão já voltamos pro game."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
    }, 1500);
};

room.onGameUnpause = function (byPlayer) {
    var messages = [
        "⚽ Bora pro jogo! ⚽",
        "⚽ Simboraaa! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onTeamVictory = function (scores) {
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
    room.sendAnnouncement(centerText(emojiHome + nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest + emojiGuest), null, white, "bold");
    room.sendAnnouncement(centerText(+ (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
    for (var i = 0; i < 3; i++) {
        room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold");
    }
    if (scores.red > scores.blue) {
        streak++;
        redWins();
    }
    else if (scores.red < scores.blue) {
        streak = 1;
        blueWins();
    }
    else if (scores.red === scores.blue) {
        streak = 0;
        noOneWins();
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    activePlay = false;
    if (lastPlayersTouched[0].team === team) {
		room.sendAnnouncement(``, null, white, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`TOCA A MÚÚSICAAA, É GOOOOOL!!!`), null, green, "bold", 0);
		room.sendAnnouncement(centerText(`         ⚽ Gol de ${lastPlayersTouched[0].name} ⚽`), null, white, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, white, "bold", 0);
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendAnnouncement(centerText(`👟 Assistência: ${lastPlayersTouched[1].name}👟`), null, white, "bold", 0);
		}
		if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + getTime(scores));
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + getTime(scores));
		}
	}
    else {
		room.sendAnnouncement(``, null, white, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️`), null, yellow, "bold", 0);
		room.sendAnnouncement(centerText(`🤡 Gol de ${lastPlayersTouched[0].name} 🤡`), null, white, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, white, "bold", 0);
        if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + getTime(scores));
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + getTime(scores));
		}
	}
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
};

room.onPositionsReset = function () {
    lastPlayersTouched = [null, null];
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendAnnouncement(centerText(changedPlayer.name + " foi desmutado."), null, yellow, "normal");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    var messages = [
        "Troca de Mapa pra ficar mais esquema.",
        "Mapa mudou, agora da jogão!",
        "Aquele não tava rolando né? Trocamo!"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
};