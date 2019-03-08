'use strict'
const middleware = {}

middleware.verifyToken = require('./verify-token')
middleware.notFind = require('./not-find')
middleware.log = require('./log.js')
module.exports = middleware
