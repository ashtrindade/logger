import LogManager from './src/log/LogManager'

export default class Log {
  static readonly d = (tag: string, message: string) => {
    return LogManager.debug(tag, message)
  }

  static readonly i = (tag: string, message: string) => {
    return LogManager.info(tag, message)
  }

  static readonly w = (tag: string, message: string) => {
    LogManager.warn(tag, message)
  }

  static readonly e = (tag: string, message: string) => {
    LogManager.error(tag, message)
  }

  static readonly v = (tag: string, message: string) => {
    LogManager.verbose(tag, message)
  }
}