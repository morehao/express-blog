'use strict'

const {errorMsg, successMsg, errorSystem} = require('../../config')

module.exports = {
  getSuccessMsg (succMsg) {
    const successRes = successMsg[succMsg] ? successMsg[succMsg] : successMsg['OPTION_SUCCESS']
    return successRes
  },
  getErrorMsg (error) {
    const errorMessage = error.message ? error.message : 'serverError'
    const finalError = errorSystem[errorMessage] ? errorSystem[errorMessage] : 'SERVER_ERROR'
    const result = errorMsg[finalError]
    return result
  },
  getErrorRes (error) {
    const result = errorMsg[error] ? errorMsg[error] : errorMsg['SERVER_ERROR']
    return result
  },
  getModelError (model) {
    const result = errorSystem[model] ? errorSystem[model] : 'SERVER_ERROR'
    return result
  }
}
