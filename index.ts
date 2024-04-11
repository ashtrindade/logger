import LogManager from './src/log/LogManager'

export default class Log {
  static readonly d = (message: string, tag: string = '') => {
    return LogManager.debug(message, tag)
  }

  static readonly i = (message: string, tag: string = '') => {
    return LogManager.info(message, tag)
  }

  static readonly w = (message: string, tag: string = '') => {
    LogManager.warn(message, tag)
  }

  static readonly e = (message: string, tag: string = '') => {
    LogManager.error(message, tag)
  }

  static readonly v = (message: string, tag: string = '') => {
    LogManager.verbose(message, tag)
  }
}