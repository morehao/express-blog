'use strict'
const BaseService = require('./base')
const {resHandler} = require('../myutil')

class ArticleService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'Article'
  }
  async addArticle (params) {
    try {
      const query = {
        title: params.title,
        authorId: params.authorId
      }
      const findRes = await super.findOne(query)
      if (findRes) {
        const errorMsg = 'ARTICLE_HAS_EXITS'
        throw errorMsg
      }
      const result = await super.save(params)
      return result
    } catch (error) {
      throw error
    }
  }
  async editById (id, params) {
    try {
      const findRes = await super.findById(id)
      if (!findRes) {
        const errorMsg = 'ARTICLE_NOT_EXITS'
        throw errorMsg
      }
      await super.updateById(id, params)
      const result = resHandler.getSuccessMsg('ARTICLE_UPDATE_SUCCESS')
      return result
    } catch (error) {
      throw error
    }
  }
  async getArticleList (params) {
    try {
      const result = await super.list(params)
      return result
    } catch (error) {
      throw error
    }
  }
}
module.exports = new ArticleService()
