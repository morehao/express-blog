'use strict'
const qiniu = require('qiniu')
const fs = require('fs')
const BaseService = require('./base')
const {resHandler} = require('../myutil')
const {settings} = require('../../config')

class ArticleService extends BaseService {
  constructor (model) {
    super(model)
    this.model = 'Article'
  }
  async addArticle (params) {
    try {
      const query = {
        title: params.title,
        authorId: params.authorId
      }
      const findRes = await super.findOne(query)
      if (findRes) {
        const errorMsg = 'ARTICLE_HAS_EXITS'
        throw errorMsg
      }
      const result = await super.save(params)
      return result
    } catch (error) {
      throw error
    }
  }
  async editById (id, params) {
    try {
      const findRes = await super.findById(id)
      if (!findRes) {
        const errorMsg = 'ARTICLE_NOT_EXITS'
        throw errorMsg
      }
      await super.updateById(id, params)
      const result = resHandler.getSuccessMsg('ARTICLE_UPDATE_SUCCESS')
      return result
    } catch (error) {
      throw error
    }
  }
  async getArticleList (params) {
    try {
      const result = await super.list(params)
      return result
    } catch (error) {
      throw error
    }
  }

  async qiniuUpload (localFile, key) {
    try {
      const {accessKey, secretKey, bucket} = settings.qiniuConfig
      const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
      const putPolicy = new qiniu.rs.PutPolicy({scope: bucket})
      const uploadToken = putPolicy.uploadToken(mac)
      const config = new qiniu.conf.Config()
      config.zone = qiniu.zone.Zone_z1
      const formUploader = new qiniu.form_up.FormUploader(config)
      const putExtra = new qiniu.form_up.PutExtra()
      return new Promise(function (resolve, reject) {
        formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
          if (respErr) return reject(respErr)
          if (respInfo.statusCode === 200) return resolve(respBody)
          reject(new Error('上传失败:statusCode !== 200'))
        })
      })
    } catch (error) {
      throw error
    }
  }

  async saveFile (filePath, target, fileName) {
    try {
      const readStream = fs.createReadStream(filePath)
      const writeStream = fs.createWriteStream(target)
      readStream.pipe(writeStream)
      return fileName
    } catch (error) {
      throw error
    }
  }
}
module.exports = new ArticleService()
