import LogManager from '../../src/log/LogManager'

describe('LogManager', () => {
  describe('debug', () => {
    it('should log a debug message', () => {
      const tag = 'TestTag'
      const message = 'Debug message'
      
      LogManager.debug(tag, message)
    })
  })

  describe('info', () => {
    it('should log an info message', () => {
      const tag = 'TestTag'
      const message = 'Info message'

      LogManager.info(tag, message)
    })
  })

  describe('warn', () => {
    it('should log a warning message', () => {
      const tag = 'TestTag'
      const message = 'Warn message'

      LogManager.warn(tag, message)
    })
  })

  describe('error', () => {
    it('should log an error message', () => {
      const tag = 'TestTag'
      const message = 'Error message'

      LogManager.error(tag, message)
    })
  })

  describe('verbose', () => {
    it('should log a verbose message', () => {
      const tag = 'TestTag'
      const message = 'Verbose message'

      LogManager.verbose(tag, message)
    })
  })
})
