'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const RightSchema = new Schema({
  rightNameEN: { type: String, required: 'name is required' },
  rightNameCN: { type: String, required: 'name is required' },
  description: { type: String, default: '该权限尚无描述' },
  router: [
    {
      type: String,
      ref: 'Routers'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

RightSchema.set('toJSON', { getters: true, virtuals: true })
RightSchema.set('toObject', { getters: true, virtuals: true })

RightSchema.path('createdAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
RightSchema.path('updatedAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('Rights', RightSchema)
