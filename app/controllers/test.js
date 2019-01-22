'use strict'
const BaseController = require('./base')
class TestController extends BaseController {
  async testResponse (req, res) {
    try {
      console.log('controller')
      res.send({data: 'request success!'})
    } catch (error) {
      res.sendErr(error)
    }
  }
}
module.exports = new TestController()
