'use strict'
const moment = require('moment')

const Services = require('../services')
const BaseController = require('./base')
const returns = require('./return')
const mdbs = require('../models')
const myutil = require('../myutil')
const configs = require('../config')

class UsersController extends BaseController {
  constructor () {
    super()
  }
  async create (req, res) {
    const result = await Services.users.create(req.body)
    res.sendOk(result)
  }
  async destroy (req, res) {
    const result = await Services.users.destroy(req.params._id)
    res.sendOk(result)
  }
  async update (req, res) {
    const params = req.body
    params._id = req.params._id
    const result = await Services.users.update(req.body)
    res.sendOk(result)
  }
  async list (req, res) {
    // 翻页参数处理
    const offset = myutil.paramsHandler.offsetFormat(req.query, configs.pagesize.users)
    const queryObj = {
      model: 'User',
      option: 'find',
      query: {},
      skipCount: offset.skipCount,
      pagesize: offset.pagesize,
      sortRule: offset.sortRule
    }
    const userList = await Services.db.list(queryObj)
    const result = userList.map(data => {
      return myutil.format.user(data.toObject())
    })
    res.sendOk(result)
    
    // returns.returnOk(req,res,result)
  }
  async detail (req, res) {
    const result = await Services.users.detail(req.params._id)
    res.sendOk(result)
  }
  async login (req,res) {
    const result = await Services.users.login(req.body)
    res.sendOk(result)
  }
  async error (req, res, next) {
    console.log('users-error')
    const error = new Error('USER_NOT_EXITS')
    // // res.sendErr('USER_NOT_EXITS')
    next(error)
    // throw 'USER_NOT_EXITS'
  }
}
module.exports = new UsersController()