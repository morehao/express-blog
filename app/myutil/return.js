'use strict'
const configs = require('../config')

module.exports = {
  // 成功提示的返回
  returnSuccess: (successMsg) => {
    const result = {
      status: 200,
      errorCode: 0,
      successMsg: configs.successMsg[successMsg]
    }
    return result
  },
  // 错误提示的返回
  returnError: (errMsg) => {
    const result = {
      status: 200,
      errorCode: configs.errorMsg[errMsg].errorCode,
      errorMsg: configs.errorMsg[errMsg].errorMsg
    }
    return result
  },
  // 正常数据的返回
  returnOk: (data) => {
    const result = {
      status: 200,
      errorCode: 0,
      data: data
    }
    return result
  }
}
