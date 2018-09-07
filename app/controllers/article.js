'use strict'
const Services = require('../services')
const {auth, resHandler, paramsHandler, validator} = require('../myutil')
const {pageConfig} = require('../../config')
class ArticleController {
  async create (req, res) {
    try {
      if (validator.isEmpty(req.body.title, {ignore_whitespace: true})) {
        const errorMsg = 'TITLE_IS_EMPTY'
        throw errorMsg
      }
      if (validator.isEmpty(req.body.content, {ignore_whitespace: true})) {
        const errorMsg = 'CONTENT_IS_EMPTY'
        throw errorMsg
      }
      const userInfo = auth.verifyToken(req.headers.token)
      req.body.authorId = userInfo.userId
      const result = await Services.article.addArticle(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async update (req, res) {
    try {
      const result = await Services.article.editById(req.params._id, req.body)
      res.sendOk(result)
    } catch (error) {
      res.sendErr(error)
    }
  }
  async list (req, res) {
    try {
      // 翻页参数处理
      const offset = paramsHandler.offsetFormat(req.query, pageConfig.article)
      console.log(req.query)
      const queryObj = {
        condition: req.query,
        skipCount: offset.skipCount,
        pagesize: offset.pagesize,
        sortRule: offset.sortRule,
        populate: [{path: 'authorId', select: '-password'}, {path: 'categoryId'}]
      }
      const result = await Services.article.getArticleList(queryObj)
      res.sendOk(result)
    } catch (error) {
      // const errorRes = resHandler.getErrorRes(error)
      // res.sendErr(errorRes)
      res.sendErr(error)
    }
  }
}
module.exports = new ArticleController()
