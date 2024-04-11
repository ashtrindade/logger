import formatTimestamp from '../helper/timestamp'
import colors from '../helper/colors'

export default class LogManager {
  message: string

  constructor(message: string) {
    this.message = message
  }

  static readonly debug = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, green, whiteOnGreen } = colors

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnGreen} D ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${green}:: ${tag} :: ${whiteOnGreen} D ${base} => ${message}\n`
    }
    console.log(message)
  }

  static readonly info = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, blue, whiteOnBlue } = colors

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnBlue} I ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${blue}:: ${tag} :: ${whiteOnBlue} I ${base} => ${message}\n`
    }
    console.log(message)
  }

  static readonly warn = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, yellow, whiteOnYellow } = colors

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnYellow} W ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${yellow}:: ${tag} :: ${whiteOnYellow} W ${base} => ${message}\n`
    }
    console.log(message)
  }

  static readonly error = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, red, whiteOnRed } = colors

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${whiteOnRed} E ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${red}:: ${tag} :: ${whiteOnRed} E ${base} => ${message}\n`
    }
    console.log(message)
  }

  static readonly verbose = (message: string, tag: string = ''): void => {
    const timestamp = formatTimestamp(new Date())
    const { cyan, base, blackOnWhite } = colors

    if (tag === '') {
      message = `${cyan}[ ${timestamp} ] ${blackOnWhite} V ${base} => ${message}\n`
    } else {
      message = `${cyan}[ ${timestamp} ] ${base}:: ${tag} :: ${blackOnWhite} V ${base} => ${message}\n`
    }
    console.log(message)
  }
}