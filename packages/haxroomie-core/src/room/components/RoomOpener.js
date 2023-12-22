const path = require('path');
const fs = require('fs');
const colors = require('colors');
const logger = require('../../logger');
const sleep = require('../../utils').sleep;
const EventEmitter = require('events');
const {
  ConnectionError,
  TimeoutError,
  InvalidTokenError,
} = require('../../errors');

/**
 * Handles the opening and closing processes of the haxball room using puppeteer.
 */
module.exports = class RoomOpener extends EventEmitter {
  /**
   * Constructs a new RoomOpener
   *
   * @param {object} opt - options
   * @param {object} opt.id - The RoomController id that this object belongs
   *    to.
   * @param {object} opt.page - Puppeteer.Page object.
   * @param {function} opt.onBrowserAction - Function that gets called from the
   *    browser context when browser wants to send data.
   * @param {number} [opt.timeout=30] - Time to wait for the room link before
   *    giving up.
   */
  constructor(opt) {
    super();
    if (!opt) throw new TypeError('Missing required argument: opt');
    if (!opt.id && opt.id !== 0) {
      throw new TypeError('Missing required argument: opt.id');
    }
    if (!opt.page) {
      throw new TypeError('Missing required argument: opt.page');
    }
    if (!opt.onBrowserAction) {
      throw new TypeError('Missing required argument: opt.onBrowserAction');
    }
    this.page = opt.page;
    this.onBrowserAction = opt.onBrowserAction;
    this.timeout = opt.timeout || 30;
    this.id = opt.id;

    /** URL of the HaxBall headless host site. */
    this.url = 'https://haxball.com/headless';
  }

  /**
   * Removes the quotes surrounding the token string if user includes them in
   * the token.
   * @param {string} token - Token for HaxBall headless room.
   * @returns {string} - Trimmed token.
   * @private
   */
  trimToken(token) {
    return token.trim().replace(/^"(.+(?="$))"$/, '$1');
  }

  /**
   * Opens the HaxBall room.
   * See RoomController#openRoom for documentation.
   *
   * @returns {RoomInfo} - Information about the opened room.
   * @throws {TypeError} - Missing arguments.
   * @throws {ConnectionError} - Can not connect to HaxBall headless page.
   * @throws {TimeoutError} - Haxball Headless Manager took too much time to
   *    start.
   * @throws {InvalidTokenError} - The token is invalid or expired.
   */
  async open(config) {
    if (!config) {
      throw new TypeError('Missing required argument: config');
    }

    if (!config.token) {
      throw new TypeError('Missing required argument: config.token');
    }

    let configCopy = { ...config };
    configCopy.token = this.trimToken(configCopy.token);

    await this.startHHM(configCopy);

    let roomLink = await this.waitForHHMToStart(this.timeout * 1000);
    if (!roomLink) {
      throw new TimeoutError('Timeout while waiting for HHM to start.');
    }
    // add the roomLink to the config
    configCopy.roomLink = roomLink;

    return this.onRoomStarted(configCopy);
  }

  /**
   * Initializes the page so that HHM and required libraries are ready to be
   * used.
   * @private
   */
  async initializePage({ hhmVersion, hhm = {} }) {
    await this.navigateToHaxballHeadlessPage();
    await this.waitForHaxballToLoad();
    await this.injectSharedStorage();
    await this.initBrowserCommunicationChannel();
    await this.injectHaxroomieNamespace();
    await this.loadHHM({ hhmVersion, hhm });
  }

  /**
   * Closes the room by navigating the tab to about:blank.
   */
  async close() {
    return this.page.goto('about:blank');
  }

  /**
   * Navigates the browser to the HaxBall headless page.
   * 
   * @throws {ConnectionError} - Can not connect to HaxBall headless page.

   * @private
   */
  async navigateToHaxballHeadlessPage() {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Navigating to ${this.url}.`
    );
    try {
      await this.page.goto(this.url);
    } catch (err) {
      logger.debug(
        `[${colors.cyan(this.id)}] [${colors.red('ERROR')}] ` + `${err}`
      );
      throw new ConnectionError(
        `Could not navigate the browser to ${this.url}`
      );
    }
  }

  /**
   * Handler that gets executed when the haxball headless room has been
   * started and Haxball Headless Manager is running.
   *
   * @param {object} config
   * @private
   */
  async onRoomStarted(config) {
    await this.injectCorePlugin();

    let hhmRoomInfo = await this.getRoomInfoFromHHM();
    // merge the roomInfo to the config so all properties get returned
    let roomInfo = Object.assign({}, config, hhmRoomInfo);
    return roomInfo;
  }

  /**
   * @param {object} opt - Options.
   * @param {string} opt.version - Version of HHM to load.
   * @param {File} [opt.hhm] - Optionally load HHM from a string.
   */
  async loadHHM(opt) {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Loading Haxball Headless Manager.`
    );

    const config = { ...opt };

    // initialize the HHM object and the log level of HHM
    await this.page.evaluate(
      (debug) => {
        HHM = typeof HHM === `undefined` ? {} : HHM;
        HHM.config = HHM.config || {};

        if (debug) {
          HHM.config.logLevel = 'debug';
        }
      },
      process.env.NODE_ENV === 'development' ? true : false
    );

    // load HHM from a the File if its provided
    if (config.hhm && config.hhm.content) {
      await this.page.addScriptTag({ content: config.hhm.content });
    } else {
      // prevent caching if using the development version
      if (config.hhmVersion === 'git') {
        await this.page.addScriptTag({
          url: `https://hhm.surge.sh/releases/hhm-${
            config.hhmVersion
          }.js?_=${Date.now()}`,
        });

        // load the possibly cached version
      } else {
        await this.page.addScriptTag({
          url: `https://hhm.surge.sh/releases/hhm-${config.hhmVersion}.js`,
        });
      }
    }
  }

  /**
   * Starts Haxball Headless Manager (HHM). If config does not contain
   * hhmConfig the default config is used.
   *
   * @param {object} config - The config object from the open function.
   * @private
   */
  async startHHM(config) {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Starting Haxball Headless Manager`
    );

    let hrConfig = Object.assign({}, config);

    if (process.env.NODE_ENV === 'development') {
      hrConfig.logLevel = 'debug';
    }

    let configFn;
    try {
      if (hrConfig.hhmConfig) {
        configFn = new Function('hrConfig', config.hhmConfig.content);
      } else {
        configFn = new Function(
          'hrConfig',
          this.readFile(
            path.join(__dirname, '..', '..', 'browser', 'hhm-config.js')
          )
        );
      }
    } catch (err) {
      logger.debug(
        `[${colors.cyan(this.id)}] [${colors.red('ERROR')}] ` + `${err}`
      );
      throw err;
    }

    try {
      await this.page.evaluate(configFn, hrConfig);
    } catch (err) {
      logger.debug(
        `[${colors.cyan(this.id)}] [${colors.red('ERROR')}] ` + `${err}`
      );
      throw err;
    }
  }

  /**
   * Waits for the headless haxball page to load.
   * 
   * @throws {ConnectionError} - Can not find HBInit function.

   * @private
   */
  async waitForHaxballToLoad() {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Waiting for HaxBall to load.`
    );
    try {
      await this.page.waitForFunction('typeof HBInit === "function"');
    } catch (err) {
      logger.debug(
        `[${colors.cyan(this.id)}] [${colors.red('ERROR')}] ` + `${err}`
      );
      throw new ConnectionError('Could not find the HBInit function!');
    }
  }

  /**
   * Creates window.haxroomieSendBrowserAction function in the browser. That
   * can be used to communicate with the main context from browser.
   *
   * Whenever the haxroomieSendBrowserAction in the browser context is called,
   * puppeteer calls its counterpart (this.onBrowserAction) with the given
   * arguments.
   * @private
   */
  async initBrowserCommunicationChannel() {
    let hasOnRoomEvent = await this.page.evaluate(() => {
      return window.haxroomieSendBrowserAction;
    });
    if (!hasOnRoomEvent) {
      await this.page.exposeFunction(
        'haxroomieSendBrowserAction',
        this.onBrowserAction
      );
    }
  }

  /**
   * Gets the frame where all the DOM elements of HaxBall headless host
   * webpage are.
   * @private
   */
  async getHaxframe() {
    let elementHandle = await this.page.$('iframe');
    let haxframe = await elementHandle.contentFrame();
    return haxframe;
  }

  /**
   * Fetches the room info from the HaxBall Headless Manager (HHM).
   * @private
   */
  async getRoomInfoFromHHM() {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Fetching the room info from HHM.`
    );
    let hhmRoomInfo;
    try {
      hhmRoomInfo = await this.page.evaluate(() => {
        return window.HHM.config.room;
      });
    } catch (err) {
      logger.debug(
        `[${colors.cyan(this.id)}] [${colors.red('ERROR')}] ` + `${err}`
      );
      throw new Error(`Unable to fetch the room info from HHM.`);
    }
    return hhmRoomInfo;
  }

  /**
   * Injects and adds the haxroomies HHM plugin in browser.
   * @private
   */
  async injectCorePlugin() {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Injecting haxroomie core HHM plugin.`
    );
    try {
      let corePlugin = this.readFile(
        path.join(__dirname, '..', '..', 'browser', 'core-plugin.js')
      );
      await this.page.evaluate((corePlugin) => {
        return HHM.manager.addPlugin({
          pluginCode: corePlugin,
          pluginName: 'hr/core',
        });
      }, corePlugin);
    } catch (err) {
      logger.debug(
        `[${colors.cyan(this.id)}] [${colors.red('ERROR')}] ` + `${err}`
      );
      throw new Error(`Failed to inject haxroomie core HHM plugin!`);
    }
  }

  /**
   * Injects the shared storage module to the headless browser. The module
   * overrides default localStorage getItem, setItem and IndexedDB open
   * functions so that each will be prefixed by id of the tabs RoomController.
   * @private
   */
  async injectSharedStorage() {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Injecting shared-storage module.`
    );
    let ss = require('../../browser/shared-storage');
    await this.page.evaluate(ss, this.id);
  }

  /**
   * Creates the haxroomie namespace in the browser context. The namespace
   * contains utils that haxroomie needs and can be used from HHM plugins.
   */
  async injectHaxroomieNamespace() {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Creating haxroomie namespace for the browser.`
    );
    let haxroomie = this.readFile(
      path.join(__dirname, '..', '..', 'browser', 'haxroomie.js')
    );
    await this.page.evaluate(haxroomie);
  }

  /**
   * Helper function to read files.
   * @param {...filePath} path - Path to the file.
   * @private
   */
  readFile(path) {
    return fs.readFileSync(path, { encoding: 'utf-8' });
  }

  /**
   * Waits for the Haxball Headless Manager to start.
   * Creates a loop that polls for the window.haxroomie.hhmStarted to
   * be true. 
   * 
   * The window.haxroomie.hhmStarted gets set in the HHM config postInit
   * plugin.
   * 
   * @param {int} timeout Time to wait in ms before failing.
   * @returns {string|null} the roomLink or null if time ran out
   * 
   * @throws {InvalidTokenError} - The token is invalid or expired.

   * @private
   */
  async waitForHHMToStart(timeout) {
    logger.debug(
      `[${colors.cyan(this.id)}] [${colors.green('INFO')}] ` +
        `Waiting for HHM to start.`
    );
    let haxframe = await this.getHaxframe();

    let startTime = new Date().getTime();
    let currentTime = new Date().getTime();
    let hhmStarted = false;

    while (!hhmStarted && timeout > currentTime - startTime) {
      // if the recaptcha appears the token must be invalid
      let recaptcha = await haxframe.$eval('#recaptcha', (e) => e.innerHTML);
      if (recaptcha) {
        throw new InvalidTokenError(`Token is invalid or has expired!`);
      }
      hhmStarted = await this.page.evaluate(`window.haxroomie.hhmStarted`);
      await sleep(1000);
      currentTime = new Date().getTime();
    }
    // loop broke because time ran out
    if (timeout <= currentTime - startTime) {
      return null;
    }
    return await haxframe.$eval('#roomlink a', (element) => {
      return element.getAttribute('href');
    });
  }
};
