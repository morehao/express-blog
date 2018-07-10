'use strict'
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))

const {settings} = require('../config')

const inits = require('./index')

// 连接数据库
mongoose.Promise = global.Promise // 将mongoose自身的promise替代为ES6promise
mongoose.connect(settings.dbConfig.URL)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(settings.port)
console.log('express-blog server started on: ' + settings.port)

inits.createAdmin(settings.adminConfig.name, settings.adminConfig.password, settings.saltKey, settings.adminConfig.role)

module.exports = app
