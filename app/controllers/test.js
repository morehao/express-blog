'use strict'
// const uuid = require('uuid/v1')
const BaseController = require('./base')
class TestController extends BaseController {
  constructor (modelName) {
    super(modelName)
    this.modelName = 'User'
    console.log('modelName:', this.modelName)
  }

  async testResponse (req, res) {
    try {
      const result = await super.test()
      res.send({data: result})
    } catch (error) {
      console.log('error:', error)
      res.sendErr(error)
    }
  }
}
module.exports = new TestController()
