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
          msg: 'USER_HAS_EXITS'
        }
        return result
      } else {
        params.password = myutil.crypto.encrypted(params.password, configs.settings.saltKey)
        // const createRes = new mdbs.User(params)
        // const result = await createRes.save()
        const result = await mdbs.User.create(params)
        return result
      }
    } catch (error) {
      const result = {
        msg: 'USER_QUEY_FAILED'
      }
      return result
    }  
  }
  async destroy (params) {
    try {
      const findRes = await mdbs.User.findById(params)
      if (!findRes) {
        const result = {
          msg: 'USER_NOT_EXITS'
        }
        return result
      } else {
        const result = await mdbs.User.remove({_id: params})
        return result
      }
    } catch (error) {
      const result = {
        msg: 'USER_DELETE_FAILED'
      }
      return result
    }
  }
  async update (params) {
    try {
      const findRes = await mdbs.User.findById(params._id)
      if (!findRes) {
        const result = {
          msg: 'USER_NOT_EXITS'
        }
        return result
      } else {
        const result = await mdbs.User.findOneAndUpdate({_id: params._id}, {$set: params})
        return result
      }
    } catch (error) {
      const result = {
        msg: 'USER_UPDATE_FAILED'
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
        msg: 'USER_QUERY_FAILED'
      }
      return result
    }
  }
}
const userService = new UserService()
module.exports = userService