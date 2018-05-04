'use strict'
const mdbs = require('../models')

class DbService {
  async list (params) {
    try {
      const result = mdbs[params.model].find(params.query)
                                  .skip(params.skipCount)
                                  .limit(params.pagesize)
                                  .sort({created_at: Number(params.sortRule)})
      return result
    } catch (error) {
      const result = {
        msg: 'LIST_QUERY_FAILDE'
      }
      return result
    }
  }
  
}

module.exports = new DbService()