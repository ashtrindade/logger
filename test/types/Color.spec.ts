import { Color } from '../../src/types/Color'

describe('Color', () => {
  it('should have the correct properties', () => {
    const color: Color = {
      base: '#000000',
      black: '#000000',
      cyan: '#00FFFF',
      red: '#FF0000',
      blue: '#0000FF',
      yellow: '#FFFF00',
      green: '#00FF00',
      whiteOnGreen: '#FFFFFF',
      whiteOnRed: '#FFFFFF',
      whiteOnBlue: '#FFFFFF',
      whiteOnYellow: '#FFFFFF',
      blackOnWhite: '#000000',
    }

    expect(color).toHaveProperty('base')
    expect(color).toHaveProperty('black')
    expect(color).toHaveProperty('cyan')
    expect(color).toHaveProperty('red')
    expect(color).toHaveProperty('blue')
    expect(color).toHaveProperty('yellow')
    expect(color).toHaveProperty('green')
    expect(color).toHaveProperty('whiteOnGreen')
    expect(color).toHaveProperty('whiteOnRed')
    expect(color).toHaveProperty('whiteOnBlue')
    expect(color).toHaveProperty('whiteOnYellow')
    expect(color).toHaveProperty('blackOnWhite')
  })
})
