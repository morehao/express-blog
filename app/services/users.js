'use strict'
const BaseService = require('./base')
const mdb = require('../models')
const {crypto, format, resHandler} = require('../myutil')
const {settings} = require('../../config')
class UserService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'User'
  }
  async addUser (data) {
    try {
      const findRes = await mdb.User.findOne({name: data.name})
      if (findRes) {
        const errorMsg = 'USER_HAS_EXITS'
        throw errorMsg
      }
      data.password = crypto.encrypted(data.password, settings.saltKey)
      const result = await mdb.User.create(data)
      return format.user(result.toObject())
    } catch (error) {
      throw error
    }
  }
  async getUserByName (name) {
    try {
      const user = await mdb.User.findOne({name: name}, null, {lean: true})
      return user
    } catch (error) {
      const errorMsg = 'SERVER_ERROR'
      throw errorMsg
    }
  }
  async getUserById (id) {
    try {
      const user = await mdb.User.findById(id)
      return user
    } catch (error) {
      const errorMsg = 'SERVER_ERROR'
      throw errorMsg
    }
  }
  async destroy (params) {
    try {
      const findRes = await mdb.User.findById(params)
      if (!findRes) {
        const errorMsg = 'USER_NOT_EXITS'
        throw errorMsg
      }
      await mdb.User.remove({_id: params})
      const result = resHandler.getSuccessMsg('USER_DELETE_SUCCESS')
      return result
    } catch (error) {
      throw error
    }
  }
  async update (params) {
    try {
      await mdb.User.findById(params._id)
      await mdb.User.update({_id: params._id}, {$set: params})
      const result = resHandler.getSuccessMsg('USER_UPDATE_SUCCESS')
      return result
    } catch (error) {
      const errorMsg = 'USER_UPDATE_FAILED'
      throw errorMsg
    }
  }
  async getUserList (params) {
    try {
      const result = super.list(params)
      return result
    } catch (error) {
      throw error
    }
  }
  async detail (params) {
    try {
      const findRes = await mdb.User.findById(params)
      const result = format.user(findRes.toObject())
      return result
    } catch (error) {
      const errorMsg = 'USER_NOT_EXITS'
      throw errorMsg
    }
  }
  async login (params) {
    try {
      const findRes = await mdb.User.findOne({name: params.name}, null, {lean: true})
      if (!findRes) {
        const errorMsg = 'USER_NOT_EXITS'
        throw errorMsg
      }
      const inputPasswd = crypto.encrypted(params.password, settings.saltKey)
      const equal = await crypto.checkPasswd(inputPasswd, findRes.password)
      if (!equal) {
        const errorMsg = 'USER_PASSWORD_WRONG'
        throw errorMsg
      }
      const result = format.user(findRes)
      return result
    } catch (error) {
      const errorMsg = 'USER_LOGIN_FAILED'
      throw errorMsg
    }
  }
  async test (params) {
    console.log('this:', this)
    this.body = 2
    const result = super.getUserByName(params)
    return result
  }
}

module.exports = new UserService()
