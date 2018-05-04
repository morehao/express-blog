'use strict'

const enums = require('../config/enum')

module.exports = {
  user: (data) => {
    if (data.sex) {
      data.reSex = enums.user[data.sex]
    }
    return data
  }
}