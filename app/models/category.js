'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const CategorySchema = new Schema({
  userId: {type: ObjectId, ref: 'Users'},
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

CategorySchema.set('toJSON', { getters: true, virtuals: true })
CategorySchema.set('toObject', { getters: true, virtuals: true })

CategorySchema.path('createdAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
CategorySchema.path('updatedAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('Categorys', CategorySchema)
