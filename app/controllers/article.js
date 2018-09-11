'use strict'
const qiniu = require('qiniu')
const uuidv1 = require('uuid/v1')
const path = require('path')
// const fs = require('fs')
const Services = require('../services')
const {auth, resHandler, paramsHandler, validator, upload} = require('../myutil')
const {pageConfig, settings} = require('../../config')
class ArticleController {
  async create (req, res) {
    try {
      if (validator.isEmpty(req.body.title, {ignore_whitespace: true})) {
        const errorMsg = 'TITLE_IS_EMPTY'
        throw errorMsg
      }
      if (validator.isEmpty(req.body.content, {ignore_whitespace: true})) {
        const errorMsg = 'CONTENT_IS_EMPTY'
        throw errorMsg
      }
      const userInfo = auth.verifyToken(req.headers.token)
      req.body.authorId = userInfo.userId
      const result = await Services.article.addArticle(req.body)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
  async update (req, res) {
    try {
      const result = await Services.article.editById(req.params._id, req.body)
      res.sendOk(result)
    } catch (error) {
      res.sendErr(error)
    }
  }
  async upload (req, res) {
    try {
      // console.log(req.file)
      const uid = uuidv1()
      const fileInfo = await upload.getFileInfo(req)
      const filePath = fileInfo.files.file.path
      // const fileName = fileInfo.files.file.name
      const fileName = uid + path.extname(fileInfo.files.file.name).toLowerCase()
      const {accessKey, secretKey, bucket} = settings.qiniuConfig
      const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
      const putPolicy = new qiniu.rs.PutPolicy({scope: bucket})
      const uploadToken = putPolicy.uploadToken(mac)

      const config = new qiniu.conf.Config()
      config.zone = qiniu.zone.Zone_z1
      const formUploader = new qiniu.form_up.FormUploader(config)
      const putExtra = new qiniu.form_up.PutExtra()
      formUploader.putFile(uploadToken, fileName, filePath, putExtra, function (respErr, respBody, respInfo) {
        if (respErr) {
          throw respErr
        }
        if (respInfo.statusCode === 200) {
          console.log(respBody)
        } else {
          console.log(respInfo.statusCode)
          console.log(respBody)
        }
      })
      // Services.article.qiniuUpload(filePath, fileName)
      // console.log('result:', result)
      // res.sendOk(fileStream)
    } catch (error) {
      res.sendErr(error)
    }
  }
  async list (req, res) {
    try {
      // 翻页参数处理
      const offset = paramsHandler.offsetFormat(req.query, pageConfig.article)
      console.log(req.query)
      const queryObj = {
        condition: req.query,
        skipCount: offset.skipCount,
        pagesize: offset.pagesize,
        sortRule: offset.sortRule,
        populate: [{path: 'authorId', select: '-password'}, {path: 'categoryId'}]
      }
      const result = await Services.article.getArticleList(queryObj)
      res.sendOk(result)
    } catch (error) {
      const errorRes = resHandler.getErrorRes(error)
      res.sendErr(errorRes)
    }
  }
}
module.exports = new ArticleController()
