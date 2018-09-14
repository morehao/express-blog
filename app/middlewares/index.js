'use strict'
const middleware = {}

middleware.verifyToken = require('./verify-token')
middleware.log = require('./log')
middleware.logResponseBody = require('./log-response-body')
middleware.test = require('./test')

module.exports = middleware
