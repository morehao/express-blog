'use strict'
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const join = require('path').join
const mongoose = require('mongoose')
const models = join('app/models')
const bodyParser = require('body-parser')
const lodash = require('lodash')

const myutil = require('./app/myutil/index.js')
// 连接数据库
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/practice')

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
console.log('todo list RESTful API server started on: ' + port)
module.exports = app