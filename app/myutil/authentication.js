'use strict'
const jwt = require('jsonwebtoken')
const {settings} = require('../config')

console.log(settings.expiredTime)
module.exports = {
  createToken (uuid) {
    const token = jwt.sign(
      {id: uuid},
      settings.jwtSecret,
      {expiresIn: settings.expiredTime}
    )
    return token
  },
  verifyToken (token) {
    const result = jwt.verify(token, settings.jwtSecret)
    return result
  }
}