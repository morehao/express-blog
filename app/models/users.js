'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: 'name is required'
  },
  age: {
    type: Number,
    min: 18,
    max: 15
  },
  sex: {
    type: String,
    enum: ['male','female','unknow']
  },
  created_at: {
    type: Date, 
    default: Date.now
  },
  updated_at: {
    type: Date, 
    default: Date.now
  }
})
module.exports = mongoose.model('Users', UserSchema)