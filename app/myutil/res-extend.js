'use strict'
const lodash = require('lodash')

module.exports = (req,res,next) => {
  const extendAttr = {
    sendOk: (option) => {
      const rst = {
        status: 200,
        errorCode: 0,
        data: option
      }
      return res.json(lodash.extend(rst))
    },
    sendErr: (option) => {
      const rst = {
        status: 200,
        errorCode: option.errorCode,
        msg: option.errorMsg
      }
      return res.json(lodash.extend(rst))
    }
  }
  lodash.extend(res,extendAttr)
  next()
}
