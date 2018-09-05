'use strict'
const Services = {}

Services.users = require('./users')
Services.db = require('./db')
Services.articleCategory = require('./article-category')

module.exports = Services
