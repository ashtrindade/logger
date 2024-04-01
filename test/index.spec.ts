import Log from '../index'
import LogManager from '../src/log/LogManager'

describe('Log', () => {
  let logManagerSpy: jest.SpyInstance

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('Debug', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'debug')
    })

    it('should call LogManager.debug when calling Log.d', () => {
      const tag = 'Test'
      const message = 'Debug message'

      Log.d(tag, message)

      expect(logManagerSpy).toHaveBeenCalledWith(tag, message)
    })
  })


  describe('Info', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'info')
    })

    it('should call LogManager.info when calling Log.i', () => {
      const tag = 'Test'
      const message = 'Info message'

      Log.i(tag, message)

      expect(logManagerSpy).toHaveBeenCalledWith(tag, message)
    })

  })

  describe('Warn', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'warn')
    })

    it('should call LogManager.warn when calling Log.w', () => {
      const tag = 'Test'
      const message = 'Warning message'

      Log.w(tag, message)

      expect(logManagerSpy).toHaveBeenCalledWith(tag, message)
    })

  })


  describe('Error', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'error')
    })

    it('should call LogManager.error when calling Log.e', () => {
      const tag = 'Test'
      const message = 'Error message'

      Log.e(tag, message)

      expect(logManagerSpy).toHaveBeenCalledWith(tag, message)
    })
  })


  describe('Verbose', () => {
    beforeEach(() => {
      logManagerSpy = jest.spyOn(LogManager, 'verbose')
    })

    it('should call LogManager.verbose when calling Log.v', () => {
      const tag = 'Test'
      const message = 'Verbose message'

      Log.v(tag, message)

      expect(logManagerSpy).toHaveBeenCalledWith(tag, message)
    })
  })
})
