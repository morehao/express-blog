'use strict'
const uuidv1 = require('uuid/v1')
const path = require('path')
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
      const fileInfo = await upload.getFileInfo(req)
      let tasks = []
      let result
      if (!settings.qiniuConfig.accessKey) {
        let saveRes = []
        for (let item in fileInfo.files) {
          const uid = uuidv1()
          const filePath = fileInfo.files[item].path
          const fileName = uid + path.extname(fileInfo.files[item].name).toLowerCase()
          const target = path.join(settings.upload.savePath, fileName)
          saveRes.push(await Services.article.saveFile(filePath, target, fileName))
        }
        result = saveRes.map(item => {
          let obj = {
            imageUrl: `${settings.website}${settings.upload.showPath}${item}`,
            imageName: item,
            resource: 'server'
          }
          return obj
        })
      } else {
        for (let item in fileInfo.files) {
          const uid = uuidv1()
          const filePath = fileInfo.files[item].path
          const fileName = uid + path.extname(fileInfo.files[item].name).toLowerCase()
          tasks.push(Services.article.qiniuUpload(filePath, fileName))
        }
        const qiniuRes = await Promise.all(tasks)
        result = qiniuRes.map(item => {
          let obj = {
            imageUrl: `${settings.qiniuConfig.originUrl}${item.key}`,
            imageName: item.key,
            resource: 'qiniu'
          }
          return obj
        })
      }
      res.sendOk(result)
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
