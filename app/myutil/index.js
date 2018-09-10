'use strict'
const myutil = {}

myutil.resExtend = require('./res-extend')
myutil.crypto = require('./crypto')
myutil.paramsHandler = require('./params-handler')
myutil.resHandler = require('./response-handler')
myutil.format = require('./format')
myutil.auth = require('./authentication')
myutil.validator = require('validator')
myutil.upload = require('./upload')

module.exports = myutil
