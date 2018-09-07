'use strict'
const controllers = {}
controllers.users = require('./users')
controllers.articleCategory = require('./article-category')
controllers.article = require('./article')

module.exports = controllers
