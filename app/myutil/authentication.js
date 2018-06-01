'use strict'
const jwt = require('jsonwebtoken')
const {settings} = require('../config')

module.exports = {
  createToken (uuid) {
    const token = jwt.sign(
      {id: uuid},
      settings.jwtSecret,
      {expiresIn: 3600 * 24}
    )
    return token
  },
  verifyToken (token) {
    const result = jwt.verify(token, settings.jwtSecret)
    return result
  }
}
