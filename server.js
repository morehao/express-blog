'use strict'
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const log4js = require('log4js')

const {settings} = require('./config')
const myutil = require('./app/myutil')

// 日志配置
const log = log4js.getLogger('startup')
log.info('The info is:')
log4js.configure('./config/log4js.json')
app.use(log4js.connectLogger(log4js.getLogger('http'), {level: 'auto'}))

// 配置静态文件
app.use(express.static(path.join(__dirname, 'app/public')))
// 连接数据库
mongoose.Promise = global.Promise // 将mongoose自身的promise替代为ES6的promise
mongoose.connect(settings.dbConfig.URL)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(myutil.resExtend)

var routes = require('./app/routes/routes') // 引入路由
routes(app) // 注册路由

app.listen(settings.port)
console.log('express-frame server started on: ' + settings.port)
log.info('express-frame server listening on', settings.port)
module.exports = app
