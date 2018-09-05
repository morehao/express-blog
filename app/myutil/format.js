'use strict'

const enums = require('../../config/enum')
const moment = require('moment')

module.exports = {
  formatDate (date) {
    let result
    if (!date) {
      result = ''
    } else {
      result = moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
    return result
  },
  user (data) {
    if (data.sex) {
      data.reSex = enums.user[data.sex]
    }
    delete data.password
    data.createdAt = this.formatDate(data.createdAt)
    data.updatedAt = this.formatDate(data.updatedAt)
    if (data.lastLogin) {
      data.lastLogin = this.formatDate(data.lastLogin)
    } else {
      data.lastLogin = '暂无登录记录'
    }
    return data
  }
}
