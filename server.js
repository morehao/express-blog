'use strict'
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const log4js = require('log4js')

const {settings} = require('./config')
const myutil = require('./app/myutil')

const routes = require('./app/routes/routes') // 引入路由

// 日志配置
log4js.configure('./config/log4js.json')
const logger = log4js.getLogger('cheese')
// app.use(log4js.connectLogger(logger, {level: 'info'}))
// app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO, format: ':method :url' }))
app.use(log4js.connectLogger(logger, {
  level: 'auto',
  // include the Express request ID in the logs
  format: (req, res, format) => format(`:remote-addr - ${req.id} - [time]${new Date()} [method]":method" - [url]":url" - [status]:status - [content-length]:content-length - [request-body]${JSON.stringify(req.body)}`)
}))
// 配置静态文件
app.use(express.static(path.join(__dirname, 'app/public')))
// 配置apidoc
app.use('/apidoc', express.static(path.join(__dirname, 'app/public/apidoc/')))

// 连接数据库
mongoose.Promise = global.Promise // 将mongoose自身的promise替代为ES6的promise
mongoose.connect(settings.dbConfig.URL, { useNewUrlParser: true }) // MongoDB升级到4.0之后，需要加useNewUrlParser参数

// 请求体解析中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 对res的扩展
app.use(myutil.resExtend)

// 跨域配置
app.use(cors())

// 注册路由
routes(app)
app.listen(settings.port)
console.log('express-blog server started on: ' + settings.port)
logger.info(`port is ${settings.port}`)

module.exports = app
