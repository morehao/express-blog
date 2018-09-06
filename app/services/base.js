'use strict'
const mdb = require('../models')
const {resHandler} = require('../myutil')
class BaseService {
  constructor (model) {
    this.model = model
    this.adventures = null // 相当于select,选择返回的属性
  }
  async findOne (params) {
    try {
      const data = await mdb[this.model].findOne(params, this.adventures, {lean: true})
      return data
    } catch (error) {
      const modelErrorMsg = resHandler.getModelError(this.model)
      throw modelErrorMsg
    }
  }
  async findById (id) {
    try {
      const data = await mdb[this.model].findById(id, {lean: true})
      return data
    } catch (error) {
      const modelErrorMsg = resHandler.getModelError(this.model)
      throw modelErrorMsg
    }
  }
  async updateById (id, params) {
    try {
      const data = await mdb[this.model].update({_id: id}, {$set: params})
      return data
    } catch (error) {
      const modelErrorMsg = resHandler.getModelError(this.model)
      throw modelErrorMsg
    }
  }
  async list (params) {
    try {
      const query = mdb[this.model]
        .find(params.condition, this.adventures, {lean: true})
        .skip(params.skipCount)
        .limit(params.pagesize)
        .sort({createdAt: Number(params.sortRule)})
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
