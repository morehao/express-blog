'use strict'

class BaseController {
  constructor (req,res) {
    this.req = req
    this.res = res
    // const {req,res,next} = this
  }
  find () {
    console.log('base-find')
  }
}
module.exports = BaseController

