'use strict'
const lodash = require('lodash')
const log4js = require('log4js')
const logger = log4js.getLogger('cheese')

module.exports = (req, res, next) => {
  const extendAttr = {
    sendOk: (data) => {
      const rst = {
        status: 200,
        errorCode: 0,
        data: data
      }
      logger.info(`sendOk:${JSON.stringify(data)}`)
      return res.send(lodash.extend(rst))
    },
    sendErr: (errorInfo) => {
      logger.info(`sendErr:${JSON.stringify(errorInfo)}`)
      return res.send(lodash.extend(errorInfo))
    }
  }
  lodash.extend(res, extendAttr)
  next()
}
