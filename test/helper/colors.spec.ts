import colors from '../../src/helper/colors'

describe('colors', () => {
  it('should have the correct base color', () => {
    expect(colors.base).toBe('\x1b[0m')
  })

  it('should have the correct black color', () => {
    expect(colors.black).toBe('\x1b[30m')
  })

  it('should have the correct cyan color', () => {
    expect(colors.cyan).toBe('\x1b[36m')
  })

  it('should have the correct red color', () => {
    expect(colors.red).toBe('\x1b[31m')
  })

  it('should have the correct blue color', () => {
    expect(colors.blue).toBe('\x1b[34m')
  })

  it('should have the correct yellow color', () => {
    expect(colors.yellow).toBe('\x1b[33m')
  })

  it('should have the correct green color', () => {
    expect(colors.green).toBe('\x1b[32m')
  })

  it('should have the correct whiteOnGreen color', () => {
    expect(colors.whiteOnGreen).toBe('\x1b[37m\x1b[42m')
  })

  it('should have the correct whiteOnRed color', () => {
    expect(colors.whiteOnRed).toBe('\x1b[37m\x1b[41m')
  })

  it('should have the correct whiteOnBlue color', () => {
    expect(colors.whiteOnBlue).toBe('\x1b[37m\x1b[44m')
  })

  it('should have the correct whiteOnYellow color', () => {
    expect(colors.whiteOnYellow).toBe('\x1b[37m\x1b[43m')
  })

  it('should have the correct blackOnWhite color', () => {
    expect(colors.blackOnWhite).toBe('\x1b[30m\x1b[47m')
  })
})
