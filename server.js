'use strict'
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const join = require('path').join
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const lodash = require('lodash')

app.use(express.static(path.join(__dirname, 'app/public')))

const settings = require('./app/config/settings')
const models = join('app/models')
const myutil = require('./app/myutil/index.js')

// 连接数据库
mongoose.Promise = global.Promise
mongoose.connect(settings.dbConfig.URL)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(myutil.resExtend)

var routes = require('./app/routes/routes') //引入路由
routes(app) //注册路由
// 中间件
// app.use((err,req,res,next) => {
//   console.log('error--------------:',err.message)
//   next()
// })
app.listen(port)
console.log('express-frame server started on: ' + port)
module.exports = app