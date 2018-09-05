'use strict'
const Services = require('../services')
const {auth, resHandler} = require('../myutil')

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
}
module.exports = new ArticleCategoryController()
