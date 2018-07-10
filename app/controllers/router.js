'use strict'
const Services = require('../services')
const {resHandler} = require('../myutil')

class RouterController {
  async create (req, res) {
    try {
      const result = await Services.router.addRouter(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
}
module.exports = new RouterController()
