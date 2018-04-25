'use strict'
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const Task = require('./app/models/tasks')
const User = require('./app/models/users')
const bodyParser = require('body-parser')

// 连接数据库
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/practice'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 中间件
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// })

var routes = require('./app/routes/routes'); //引入路由
routes(app); //注册路由

app.listen(port)
console.log('todo list RESTful API server started on: ' + port);