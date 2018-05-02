'use strict'
const serverApp = require('../../server')
class BaseController {
  constructor () {
  }
  returnOk (req,res,data) {
    res.json({
      errorCode: 0,
      data: data
    })
  }
}
module.exports = BaseController

