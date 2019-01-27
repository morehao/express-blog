'use strict'
const middleware = {}

middleware.verifyToken = require('./verify-token')
middleware.notFind = require('./not-find')

module.exports = middleware
