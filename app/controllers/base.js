'use strict'
const Services = require('../services')

class BaseController {
  // constructor (req, res) {
  //   this.req = req
  //   this.res = res
  // }
  async test (req, res) {
    const result = await Services.users.test(req.body.name)
    res.sendOk(result)
  }
}
module.exports = BaseController
