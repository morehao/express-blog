'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const RoleSchema = new Schema({
  roleNameEN: { type: String, required: 'name is required' },
  roleNameCN: { type: String, required: 'name is required' },
  description: { type: String, default: '该角色尚无描述' },
  right: [
    {
      type: String,
      ref: 'Rights'
    }
  ],
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

RoleSchema.set('toJSON', { getters: true, virtuals: true })
RoleSchema.set('toObject', { getters: true, virtuals: true })

RoleSchema.path('created_at').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
RoleSchema.path('updated_at').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('Roles', RoleSchema)
