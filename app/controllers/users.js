'use strict'
const Services = require('../services')
const BaseController = require('./base')
const returns = require('./return')
const mdbs = require('../models')
class UsersController extends BaseController {
  constructor () {
    super()
  }
  async create (req,res) {
    const result = await Services.users.create(req.body)
    res.sendOk(result)
  }
  async destroy (req,res,next) {
    const result = await Services.users.destroy(req.params._id)
    res.sendOk(result)
  }
  async update (req,res,next) {
    const params = req.body
    params._id = req.params._id
    const result = await Services.users.update(req.body)
    res.sendOk(result)
  }
  async list (req,res) {
    const result = await Services.users.list(req.query)
    console.log(typeof result[0]._id)
    res.sendOk(result)
    // returns.returnOk(req,res,result)
  }
  async detail (req,res,next) {
    const result = await Services.users.detail(req.params._id)
    res.sendOk(result)
  }
  async error (req,res,next) {
    console.log('users-error')
    const error = new Error('USER_NOT_EXITS')
    // // res.sendErr('USER_NOT_EXITS')
    next(error)
    // throw 'USER_NOT_EXITS'
  }
}
module.exports = new UsersController()