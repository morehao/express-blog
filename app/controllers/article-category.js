'use strict'
const Services = require('../services')
const {auth, resHandler, paramsHandler} = require('../myutil')
const {pageConfig} = require('../../config')

class ArticleCategoryController {
  async create (req, res) {
    try {
      const userInfo = auth.verifyToken(req.headers.token)
      req.body.userId = userInfo.userId
      const result = await Services.articleCategory.addCategory(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }

  async update (req, res) {
    try {
      const result = await Services.articleCategory.editById(req.params._id, req.body)
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
        condition: req.query,
        skipCount: offset.skipCount,
        pagesize: offset.pagesize,
        sortRule: offset.sortRule,
        populate: [{path: 'userId', select: '-password'}]
      }
      const result = await Services.articleCategory.getCategoryList(queryObj)
      res.sendOk(result)
    } catch (error) {
      // const errorRes = resHandler.getErrorRes(error)
      // res.sendErr(errorRes)
      res.sendErr(error)
    }
  }
}
module.exports = new ArticleCategoryController()
