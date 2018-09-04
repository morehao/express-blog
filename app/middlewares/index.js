'use strict'
const middleware = {}

middleware.verifyToken = require('./verify-token')
middleware.log = require('./log')

module.exports = middleware
