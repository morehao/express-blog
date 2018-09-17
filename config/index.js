'use strict'
const config = require('config')

const settings = config.get('Customer.settings')

const configs = {}

configs.settings = require(`./${settings}`)
// configs.settings = require('./settings')
configs.errorMsg = require('./error-message')
configs.successMsg = require('./success-message')
configs.errorSystem = require('./error-system')
configs.pageConfig = require('./pagesize')
configs.enum = require('./enum')
configs.router = require('./router.js')
configs.right = require('./right')
configs.log = require('./log')
configs.logConfig = require('./log-config')

module.exports = configs
