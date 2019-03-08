'use strict'
const mdb = require('../models')

class BaseController {
  constructor (modelName) {
    this.modelName = modelName
  }
  async test () {
    const result = await mdb[this.modelName].find()
    return result
    // return 'aaa'
  }
}
module.exports = BaseController
