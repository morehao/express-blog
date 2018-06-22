'use strict'
const mdb = require('../models')
const {resHandler} = require('../myutil')
class BaseService {
  constructor (model) {
    this.model = model
    this.adventures = null
  }
  async list (params) {
    try {
      const query = mdb[this.model]
        .find(params.condition, this.adventures, {lean: true})
        .skip(params.skipCount)
        .limit(params.pagesize)
        .sort({created_at: Number(params.sortRule)})
      const dataCount = await mdb[this.model].count()
      const list = await query
      return {
        dataCount: dataCount,
        list: list
      }
    } catch (error) {
      const modelErrorMsg = resHandler.getModelError(this.model)
      throw modelErrorMsg
    }
  }
  async getUserByName (name) {
    const query = mdb[this.model].findOne({name: name}, this.adventures, {blen: true})
    if (this.model === 'User') {
      query.select('-password')
    }
    const findRes = await query
    return findRes
  }
}

module.exports = BaseService
