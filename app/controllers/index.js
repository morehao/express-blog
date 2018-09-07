'use strict'
const controllers = {}
controllers.users = require('./users')
controllers.category = require('./category')
controllers.article = require('./article')

module.exports = controllers
