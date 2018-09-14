'use strict'
const controllers = {}
controllers.users = require('./users')
controllers.category = require('./category')
controllers.article = require('./article')
controllers.test = require('./test')

module.exports = controllers
