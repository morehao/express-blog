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
          errorMsg: 'USER_HAS_EXITS'
        }
        return result
      } else {
        params.password = myutil.crypto.encrypted(params.password, configs.settings.saltKey)
        const result = await mdbs.User.create(params)
        return result
      }
    } catch (error) {
      const result = {
        errorMsg: 'USER_QUEY_FAILED'
      }
      return result
    }  
  }
  async destroy (params) {
    try {
      const findRes = await mdbs.User.findById(params)
      if (!findRes) {
        const result = {
          errorMsg: 'USER_NOT_EXITS'
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
        errorMsg: 'USER_DELETE_FAILED'
      }
      return result
    }
  }
  async update (params) {
    try {
      const findRes = await mdbs.User.findById(params._id)
      if (!findRes) {
        const result = {
          errorMsg: 'USER_NOT_EXITS'
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
      const result = {
        errorMsg: 'USER_UPDATE_FAILED'
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
      const result =  myutil.format.user(findRes.toObject())
      return result
    } catch (error) {
      const result = {
        errorMsg: 'USER_QUERY_FAILED'
      }
      return result
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
        const inputPasswd = myutil.crypto.encrypted(params.password, configs.settings.saltKey)
        const equal = await myutil.crypto.checkPasswd(inputPasswd, findRes.password)
        if (!equal) {
          const result = {
            errorMsg: 'USER_PASSWORD_WRONG'
          }
          return result
        } else {
          const result = myutil.format.user(findRes.toObject())
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