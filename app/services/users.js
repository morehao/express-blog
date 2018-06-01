'use strict'
const mdbs = require('../models')
const {crypto, format, resHandler} = require('../myutil')
const configs = require('../config')
class UserService {
  async create (params) {
    try {
      let result
      const findRes = await mdbs.User.findOne({name: params.name})
      if (findRes) {
        throw 'USER_HAS_EXITS'
      } else {
        params.password = crypto.encrypted(params.password, configs.settings.saltKey)
        result = await mdbs.User.create(params)
      }
      return result
    } catch (error) {
      throw error
    }  
  }
  async destroy (params) {
    try {
      const findRes = await mdbs.User.findById(params)
      if (!findRes) {
        throw 'USER_NOT_EXITS'
      }
      await mdbs.User.remove({_id: params})
      const result = resHandler.getSuccessMsg('USER_DELETE_SUCCESS')
      return result
    } catch (error) {
      throw error
    }
  }
  async update (params) {
    try {
      const findRes = await mdbs.User.findById(params._id)
      await mdbs.User.update({_id: params._id}, {$set: params})
      const result = resHandler.getSuccessMsg('USER_UPDATE_SUCCESS')
      return result
    } catch (error) {
      throw 'USER_UPDATE_FAILED'
    }
  }
  async list (params) {
    const result = await mdbs.User.find(params)
    return result
  }
  async detail (params) {
    try {
      const findRes = await mdbs.User.findById(params)
      const result =  format.user(findRes.toObject())
      return result
    } catch (error) {
      throw 'USER_NOT_EXITS'
    }
  }
  async login (params) {
    try {
      const findRes = await mdbs.User.findOne({name: params.name})
                                      .select('-password')
      if (!findRes) {
        const result = {
          errorMsg: 'USER_NOT_EXITS'
        }
        return result
      } else {
        const inputPasswd = crypto.encrypted(params.password, configs.settings.saltKey)
        const equal = await crypto.checkPasswd(inputPasswd, findRes.password)
        if (!equal) {
          const result = {
            errorMsg: 'USER_PASSWORD_WRONG'
          }
          return result
        } else {
          const result = format.user(findRes.toObject())
          return result
        }
      }
    } catch (error) {
      const result = {
        errorMsg: 'USER_LOGIN_FAILED'
      }
      return result
    }
  }
}

module.exports = new UserService()