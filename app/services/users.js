'use strict'
const mdbs = require('../models')

class UserService {
  async create (params) {
    const createRes = new mdbs.User(params)
    const result = await createRes.save()
    return result
  }
  async list (params) {
    const result = await mdbs.User.find(params)
    return result
  }
}
const userService = new UserService()
module.exports = userService