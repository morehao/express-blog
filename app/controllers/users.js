'use strict'
const Services = require('../services')
const {auth, format, resHandler, paramsHandler} = require('../myutil')
const {pageConfig} = require('../../config')

class UsersController {
  async create (req, res) {
    try {
      const result = await Services.users.addUser(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async destroy (req, res) {
    try {
      const result = await Services.users.destroy(req.params._id)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async update (req, res) {
    try {
      const params = req.body
      params._id = req.params._id
      const result = await Services.users.update(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async list (req, res) {
    try {
      // 翻页参数处理
      const offset = paramsHandler.offsetFormat(req.query, pageConfig.users)
      const queryObj = {
        condition: {},
        skipCount: offset.skipCount,
        pagesize: offset.pagesize,
        sortRule: offset.sortRule
      }
      const userList = await Services.users.getUserList(queryObj)
      userList.list = userList.list.map(data => {
        return format.user(data)
      })
      res.sendOk(userList)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
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
  }
  async detail (req, res) {
    try {
      const result = await Services.users.detail(req.params._id)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async login (req, res) {
    try {
      const result = await Services.users.login(req.body)
      result.token = auth.createToken(result._id)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async test (req, res) {
    const result = await Services.users.test(req.body.name)
    res.sendOk(result)
  }
}
module.exports = new UsersController()
