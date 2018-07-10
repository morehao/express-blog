'use strict'
const BaseService = require('./base')
const mdb = require('../models')
const {resHandler} = require('../myutil')

class RouterService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'Router'
  }
  async addRouter (data) {
    try {
      const findRes = await mdb.Router.findOne({
        routerNameEN: data.routerNameEN,
        routerNameCN: data.routerNameCN,
        routerPath: data.routerPath,
        requestType: data.requestType,
        isParams: data.isParams
      })
      if (findRes) {
        const errorMsg = 'ROUTER_HAS_EXITS'
        throw errorMsg
      }
      const result = await mdb.Router.create(data)
      return result
    } catch (error) {
      throw error
    }
  }
  async destoryById (id) {
    try {
      const findRes = await mdb.Router.findById(id)
      if (!findRes) {
        const errorMsg = 'ROUTER_NOT_EXITS'
        throw errorMsg
      }
      await mdb.User.remove({_id: id})
      const result = resHandler.getSuccessMsg('ROUTER_DELETE_SUCCESS')
      return result
    } catch (error) {
      throw error
    }
  }
  async updateById (id, params) {
    try {
      await mdb.Router.findById(id)
      await mdb.Router.update({_id: id}, {$set: params})
      const result = resHandler.getSuccessMsg('ROUTER_UPDATE_SUCCESS')
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = new RouterService()
