'use strict'
const formidable = require('formidable')

module.exports = {
  getFileInfo (req) {
    return new Promise(function (resolve, reject) {
      const form = new formidable.IncomingForm()
      form.multiples = true
      form.parse(req, function (err, fields, files) {
        if (err) return reject(err)
        resolve({fileds: fields, files: files})
      })
    })
  }
}
