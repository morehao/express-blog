'use strict'
const lodash = require('lodash')

module.exports = (req, res, next) => {
  const extendAttr = {
    sendOk: (data) => {
      const rst = {
        status: 200,
        errorCode: 0,
        data: data
      }
      return res.send(lodash.extend(rst))
    },
    sendErr: (errorInfo) => {
      return res.send(lodash.extend(errorInfo))
    }
  }
  lodash.extend(res, extendAttr)
  next()
}
