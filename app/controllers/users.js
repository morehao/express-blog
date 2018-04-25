'use strict'
const userService = require('../services/users')
const BaseController = require('./base')
class UsersController extends BaseController {
  constructor ({req,res}) {
    super ({req,res})
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
    res.json({
      data: result
    })
  }
}
module.exports = UsersController