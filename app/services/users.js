'use strict'
const mdbs = require('../models')
const myutil = require('../myutil')
const configs = require('../config')
class UserService {
  async create (params) {
    try {
      const findRes = await mdbs.User.findOne({name: params.name})
      if (findRes) {
        const result = {
          errMsg: 'USER_HAS_EXITS'
        }
        return result
      } else {
        params.password = myutil.crypto.encrypted(params.password, configs.settings.saltKey)
        const result = await mdbs.User.create(params)
        return result
      }
    } catch (error) {
      const result = {
        errMsg: 'USER_QUEY_FAILED'
      }
      return result
    }  
  }
  async destroy (params) {
    try {
      const findRes = await mdbs.User.findById(params)
      if (!findRes) {
        const result = {
          errMsg: 'USER_NOT_EXITS'
        }
        return result
      } else {
        await mdbs.User.remove({_id: params})
        const result = {
          successMsg: 'USER_DELETE_SUCCESS'
        }
        return result
      }
    } catch (error) {
      const result = {
        errMsg: 'USER_DELETE_FAILED'
      }
      return result
    }
  }
  async update (params) {
    try {
      const findRes = await mdbs.User.findById(params._id)
      if (!findRes) {
        const result = {
          errerrMsg: 'USER_NOT_EXITS'
        }
        return result
      } else {
        await mdbs.User.update({_id: params._id}, {$set: params})
        const result = {
          successMsg: 'USER_UPDATE_SUCCESS'
        }
        return result
      }
    } catch (error) {
      console.log('err:',error)
      const result = {
        errMsg: 'USER_UPDATE_FAILED'
      }
      return result
    }
  }
  async list (params) {
    const result = await mdbs.User.find(params)
    return result
  }
  async detail (params) {
    try {
      const findRes = await mdbs.User.findById(params)
      return findRes
    } catch (error) {
      const result = {
        errMsg: 'USER_QUERY_FAILED'
      }
      return result
    }
  }
}

module.exports = new UserService()