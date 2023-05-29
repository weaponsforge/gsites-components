const { ERROR_CODES } = require('./errorcodes')

class ServerError extends Error {
  static httpErrorCodes = ERROR_CODES

  constructor (message, errorcode) {
    super(message, {
      cause: {
        code: errorcode ?? ERROR_CODES._500
      }
    })
  }

  set errorCode (errorcode) {
    this.cause = {
      code: errorcode
    }
  }

  get errorCode () {
    return this.cause.code
  }
}

module.exports = ServerError
