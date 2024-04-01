import colors from '../helper/colors'

export default class LogManager {
  static readonly debug = (tag: string, message: string): void => {
    const timeStamp = new Date().toString()
    const { cyan, base, green, whiteOnGreen } = colors

    const logMessage = `${cyan}[ ${timeStamp} ] ${green}:: ${tag} :: ${whiteOnGreen} D ${base} => ${message}\n`
    console.log(logMessage)
  }

  static readonly info = (tag: string, message: string): void => {
    const timeStamp = new Date().toString()
    const { cyan, base, blue, whiteOnBlue } = colors

    const logMessage = `${cyan}[ ${timeStamp} ] ${blue}:: ${tag} :: ${whiteOnBlue} I ${base} => ${message}\n`
    console.log(logMessage)
  }

  static readonly warn = (tag: string, message: string): void => {
    const timeStamp = new Date().toString()
    const { cyan, base, yellow, whiteOnYellow } = colors

    const logMessage = `${cyan}[ ${timeStamp} ] ${yellow}:: ${tag} :: ${whiteOnYellow} W ${base} => ${message}\n`
    console.log(logMessage)
  }

  static readonly error = (tag: string, message: string): void => {
    const timeStamp = new Date().toString()
    const { cyan, base, red, whiteOnRed } = colors

    const logMessage = `${cyan}[ ${timeStamp} ] ${red}:: ${tag} :: ${whiteOnRed} E ${base} => ${message}\n`
    console.log(logMessage)
  }

  static readonly verbose = (tag: string, message: string): void => {
    const timeStamp = new Date().toString()
    const { cyan, base, blackOnWhite } = colors

    const logMessage = `${cyan}[ ${timeStamp} ] ${base}:: ${tag} :: ${blackOnWhite} V ${base} => ${message}\n`
    console.log(logMessage)
  }
}