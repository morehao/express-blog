'use strict'
const Services = require('../services')
const {auth, resHandler} = require('../myutil')
class ArticleController {
  async create (req, res) {
    try {
      const userInfo = auth.verifyToken(req.headers.token)
      req.body.authorId = userInfo.authorId
      const result = await Services.article.addArticle(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
}
module.exports = new ArticleController()
