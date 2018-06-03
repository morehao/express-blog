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
    data.created_at = this.formatDate(data.created_at)
    data.updated_at = this.formatDate(data.updated_at)
    data.lastLogin = this.formatDate(data.lastLogin)
    return data
  }
}
