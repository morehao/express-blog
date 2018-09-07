'use strict'
const BaseService = require('./base')

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
}
module.exports = new ArticleService()
