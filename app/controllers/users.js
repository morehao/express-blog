'use strict'
const userService = require('../services/users')
const BaseController = require('./base')
const returns = require('./return')
class UsersController extends BaseController {
  constructor () {
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
    // returns.returnOk(req,res,result)
  }
  async show (req,res,next) {
    console.log('params:',req.query)
    const result = await userService.show(req.params)
    res.sendOk(result)
  }
  async error (req,res,next) {
    console.log('users-error')
    const error = new Error('USER_NOT_EXITS')
    // // res.sendErr('USER_NOT_EXITS')
    next(error)
  }
}
module.exports = new UsersController()