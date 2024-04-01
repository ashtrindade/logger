# Logger

## Description

The Logger package is a utility for logging messages in your application. It provides a simple and flexible way to record important events, errors, and debugging information.

## Usage

To use the Logger package in your project, follow these steps:

1. Install the package using your package manager of choice:

  ```bash
  npm install @ashtrindade/logger
  ```

2. Import the Log module into your code:

  ```js
  // CommonJS
  const Log = require('@ashtrindade/logger');

  // ES6
  import Log from '@ashtrindade/logger';
  ```

  ```js
  /**
  @param {string} tag - use to help identify the source of the log message.
  @param {string} message - message: message to be logged.
  */

  Log.d(tag: string, message: string); // Debug log
  Log.i(tag: string, message: string); // Info log
  Log.w(tag: string, message: string); // Warning log
  Log.e(tag: string, message: string); // Error log
  Log.v(tag: string, message: string); // Verbose log
  ```

## Example

  ```ts
  Log.d('MyTag', 'This is a debug message');
  // Output: [<Timestamp> :: MyTag ::  D  => This is a debug message
  ```

![Examples of logs with the format above](https://i.imgur.com/W95ho5W.png)
