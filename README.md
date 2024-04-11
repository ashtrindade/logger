# Logger

This Logger package is a utility for logging messages in your application. It provides a simple and flexible way to record important events, errors, and debugging information.

## Usage

To use the Logger package in your project, follow these steps:

1. Install the package using your package manager of choice:

  ```bash
  npm install @ashtrindade/logger
  ```

2. Import the Log module into your code:

  ```js
  // CommonJS
  const Log = require('@ashtrindade/logger')

  // ES6
  import Log from '@ashtrindade/logger'
  ```

  ```js
  /**
  @required {string} message - data to be logged.
  @optional {string} tag - use to help identify the source of the log message.
  */

  Log.d(message: string, tag: string); // Debug log
  Log.i(message: string, tag: string); // Info log
  Log.w(message: string, tag: string); // Warning log
  Log.e(message: string, tag: string); // Error log
  Log.v(message: string, tag: string); // Verbose log
  ```

## Example

  ```ts
  Log.d('This is a debug message', 'MyTag');
  // Output: [ YYYY-MM-DD HH:mm:ss GMT<offset> :: MyTag ::  D  => This is a debug message
  ```

![Examples of logs with the format above](https://i.imgur.com/xYkkhBj.png)
