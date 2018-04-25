'use strict'
const mongoose = require('mongoose')

const mdbs = {}
mdbs.User = require('./users')
mdbs.Task = require('./tasks')

module.exports = mdbs