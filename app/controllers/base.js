'use strict'
const mdb = require('../models')

class BaseController {
  constructor (modelName) {
    this.modelName = modelName
    this.name = 'aaaa'
  }
  async test () {
    console.log('this.name', this.name)
    const result = await mdb[this.modelName].find()
    return result
  }
}
module.exports = BaseController
