'use strict'
const BaseService = require('./base')
const mdb = require('../models')

class ArticleCategoryService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'ArticleCategory'
  }

  async addCategory (data) {
    try {
      const query = {
        userId: data.userId,
        name: data.name
      }
      // const findRes = await super.findOne(query)
      const findRes = await mdb.User.findOne(query, 'userId')
      console.log('asad:', JSON.stringify(findRes))
      if (findRes) {
        const errorMsg = 'CATEGORY_HAS_EXITS'
        throw errorMsg
      }
      const result = await mdb.ArticleCategory.create(data)
      return result
    } catch (error) {
      throw error
    }
  }
}
module.exports = new ArticleCategoryService()
