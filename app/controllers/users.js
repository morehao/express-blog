'use strict'
const userService = require('../services/users')
const BaseController = require('./base')
const returns = require('./return')
class UsersController extends BaseController {
  constructor () {
    // console.log('req1:',req)
    // super ({req,res})
    super()
  }
  async create (req,res) {
    const result = await userService.create(req.body)
    res.json({
      data: result
    })
  }
  async list (req,res) {
    const result = await userService.list(req.query)
    console.log(typeof result[0]._id)
    res.sendOk(result)
    res.body = result
    // returns.returnOk(req,res,result)
  }
}
module.exports = new UsersController()