'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: { type: String, required: 'name is required' },
  nickName: { type: String },
  password: { type: String },
  age: { type: Number, min: 18, max: 95},
  sex: { type: String, enum: ['male','female','unknow'] },
  company: String, // 大学或者公司
  website: String, // 个人网站
  intruction: { type: String, default: '这个人很懒，什么都有没留下、、、' },
  logo: { type: String, default: '/upload/images/defaultlogo.png' },
  lastLogin: Date,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

UserSchema.set('toJSON', { getters: true, virtuals: true })
UserSchema.set('toObject', { getters: true, virtuals: true })

UserSchema.path('lastLogin').get(function (v) {
    return moment(v).format("YYYY-MM-DD HH:mm:ss")
})
UserSchema.path('created_at').get(function (v) {
  return moment(v).format("YYYY-MM-DD HH:mm:ss")
})
UserSchema.path('updated_at').get(function (v) {
  return moment(v).format("YYYY-MM-DD HH:mm:ss")
})

UserSchema.statics = {
  findAge: async function (age) {
    const findRes = await this.find({age: age})
    return findRes
  },
  list: async function (query,currentPage,pagesize,sortRule) {
    return this.find(query)
              .skip(Number(Number(currentPage -1 )) * Number(pagesize))
              .limit(pagesize)
              .sort({created_at: Number(sortRule)})
  },
  list2: async function (query,currentPage,pagesize,sortRule) {
    const result = await this.find(query)
                              .sort(sortRule)
  }
}

module.exports = mongoose.model('Users', UserSchema)