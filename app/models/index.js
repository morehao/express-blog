'use strict'

const mdbs = {}
mdbs.User = require('./users')
mdbs.Role = require('./role')
mdbs.Right = require('./right')
mdbs.Article = require('./article')
mdbs.ArticleCategory = require('./article-category')

module.exports = mdbs
