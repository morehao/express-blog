'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  authorId: { type: String, ref: 'Users' },
  top: { type: Boolean, default: false }, // 置顶文章
  good: { type: Boolean, default: false }, // 精华文章
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  countInfo: {
    commentCount: {type: Number, default: 0},
    visitCount: {type: Number, default: 0},
    collectCount: {type: Number, default: 0},
    likeCount: {type: Number, default: 0}
  },
  contentType: { type: String, enum: ['html', 'markdown'] },
  categoryId: { type: String, ref: 'ArticleCategory' },
  deleted: { type: Boolean, default: false }
})

ArticleSchema.index({ create_at: -1 })
ArticleSchema.index({ top: -1, last_reply_at: -1 })
ArticleSchema.index({ author_id: 1, create_at: -1 })

module.exports = mongoose.model('Articles', ArticleSchema)
