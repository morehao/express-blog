'use strict'
const express = require('express')
const path = require('path')
const app = express()
const join = require('path').join
const mongoose = require('mongoose')
const models = join('app/models')
const bodyParser = require('body-parser')
const lodash = require('lodash')

app.use(express.static(path.join(__dirname, 'app/public')))

const configs = require('./app/config')
const myutil = require('./app/myutil/index.js')

// 连接数据库
mongoose.Promise = global.Promise // 将mongoose自身的promise替代为ES6的promise
mongoose.connect(configs.settings.dbConfig.URL)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(myutil.resExtend)

var routes = require('./app/routes/routes') //引入路由
routes(app) //注册路由

app.listen(configs.settings.port)
console.log('express-frame server started on: ' + configs.settings.port)
module.exports = app