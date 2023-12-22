/**
 * @module errors
 */

/**
 * Error for when the HaxBall headless page is unreachable.
 */
class ConnectionError extends Error {
  constructor(message) {
    message = message || 'The HaxBall headless page is unreachable!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error for when trying to open a room, but the token is invalid or
 * has been expired.
 */
class InvalidTokenError extends Error {
  constructor(message) {
    message = message || 'The token is invalid or expired!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error for when the Haxball Headless Manager takes too much time to start.
 */
class TimeoutError extends Error {
  constructor(message) {
    message =
      message ||
      'Could not open the room because HHM took too ' + 'much time to start!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error thrown by RoomController methods when RoomController can not control
 * the room. This can happen if the tab that the RoomController is controlling
 * gets closed or if some fatal error happens in the page.
 */
class UnusableError extends Error {
  constructor(message) {
    message = message || 'This room is not usable!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error thrown by RoomController methods when trying to call methods that
 * require the room to NOT be running, but it is.
 */
class RoomIsRunningError extends Error {
  constructor(message) {
    message = message || 'This room is running!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error thrown by RoomController methods when trying to call methods that
 * require the room to be running, but it is not.
 */
class RoomNotRunningError extends Error {
  constructor(message) {
    message = message || 'This room is not running!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error thrown by RoomController when trying to call methods that
 * require Haxball Headless Manager to be loaded, but it is not.
 */
class HHMNotLoadedError extends Error {
  constructor(message) {
    message = message || 'Haxball Headless Manager is not loaded!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Error thrown by RoomController when calling RoomController#openRoom while
 * it has been called previously and not yet finished.
 */
class RoomLockedError extends Error {
  constructor(message) {
    message = message || 'The room is already being opened!';
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  ConnectionError,
  TimeoutError,
  InvalidTokenError,
  UnusableError,
  RoomNotRunningError,
  RoomIsRunningError,
  RoomLockedError,
  HHMNotLoadedError,
};
