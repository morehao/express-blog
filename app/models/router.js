'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const routerSchema = new Schema({
  routerNameEN: { type: String, required: 'name is required' },
  routerNameCN: { type: String, required: 'name is required' },
  routerPath: String,
  requestType: {type: String, enum: ['GET', 'POST', 'PUT', 'DELETE']},
  isParams: {type: Number, enum: [0, 1]}, // GET请求，1代表请求的url中有数组对象，0代表没有
  description: { type: String, default: '该路由尚无描述' },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

routerSchema.set('toJSON', { getters: true, virtuals: true })
routerSchema.set('toObject', { getters: true, virtuals: true })

routerSchema.path('created_at').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
routerSchema.path('updated_at').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('Routers', routerSchema)
