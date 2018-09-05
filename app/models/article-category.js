'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const ArticleCategorySchema = new Schema({
  userId: {type: String, ref: 'Users'},
  name: {type: String, required: 'name is required'},
  sortCode: {type: Number}, // 类别编号
  parentId: {type: String}, // 父类别的id
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

ArticleCategorySchema.set('toJSON', { getters: true, virtuals: true })
ArticleCategorySchema.set('toObject', { getters: true, virtuals: true })

ArticleCategorySchema.path('createdAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
ArticleCategorySchema.path('updatedAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('ArticleCategorys', ArticleCategorySchema)
