'use strict'
const moment = require('moment')

const Services = require('../services')
const mdbs = require('../models')
const myutil = require('../myutil')
const configs = require('../config')

class UsersController {
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

    // const modelObj = {
    //   user: mdbs.User
    // }
    // const result = await modelObj[req.query.modelName].find()
    // const result = await mdbs.User.find({
    //   $or: [
    //     {name: {$regex: 'admin', $options: 'i'}},
    //     {name: {$regex: 'test001', $options: 'i'}}   
    //   ]
    // })

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
    // myutil.auth.verifyToken(req.headers.token)
    const result = await Services.users.detail(req.params._id)
    res.sendOk(result)
  }
  async login (req,res) {
    const result = await Services.users.login(req.body)
    result.token = myutil.auth.createToken(result.id)
    res.sendOk(result)
  }
  async error (req, res, next) {
    const error = new Error('USER_NOT_EXITS')
    // // res.sendErr('USER_NOT_EXITS')
    next(error)
    // throw 'USER_NOT_EXITS'
  }
}
module.exports = new UsersController()