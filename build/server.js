'use strict'
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))

const configs = require('../app/config')

const inits = require('./index')

// 连接数据库
mongoose.Promise = global.Promise // 将mongoose自身的promise替代为ES6promise
mongoose.connect(configs.settings.dbConfig.URL)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(configs.settings.port)
console.log('express-frame server started on: ' + configs.settings.port)

inits.createAdmin('admin', '123456', configs.settings.saltKey)

module.exports = app
