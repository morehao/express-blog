'use strict'
const mdb = require('../models')

class DbService {
  async list (params) {
    try {
      const result = mdb[params.model]
        .find(params.query)
        .skip(params.skipCount)
        .limit(params.pagesize)
        .sort({createdAt: Number(params.sortRule)})
        .select('-password')
      return result
    } catch (error) {
      const result = {
        errorMsg: 'LIST_QUERY_FAILDE'
      }
      return result
    }
  }
}

module.exports = new DbService()
