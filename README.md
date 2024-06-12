# Logger

This Logger package is a utility for logging messages in your application. It provides a simple and flexible way to record important events, errors, and debugging information.

<p align="center">
  <img src="https://img.shields.io/npm/l/%40ashtrindade%2Flogger?labelColor=181717" alt="License" />
  <img src="https://img.shields.io/github/actions/workflow/status/ashtrindade/logger/coverage.yml?logo=jest&logoColor=C21325&label=tests&labelColor=181717" alt="Tests Status" />
  <br>
  <img src="https://img.shields.io/npm/v/%40ashtrindade%2Flogger?label=version&logo=npm&labelColor=181717" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/%40ashtrindade%2Flogger?logo=npm&labelColor=181717&color=blue" alt="NPM Downloads" />
  <img alt="NPM Type Definitions" src="https://img.shields.io/npm/types/%40ashtrindade%2Flogger?logo=npm&labelColor=181717">
</p>

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
