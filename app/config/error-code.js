'use strict'
module.exports = {
  USER_HAS_EXITS: {
    errorCode: 10000,
    errorMsg: '该用户已经存在'
  },
  USER_NOT_EXITS: {
    errorCode: 10001,
    errorMsg: '该用户不存在'
  },
  USER_FIND_FAILED: {
    errorCode: 10002,
    errorMsg: '用户查询失败'
  },
  USER_UPDATE_FAILED: {
    errorCode: 10003,
    errorMsg: '用户更新失败'
  },
  USER_DELETE_FAILED: {
    errorCode: 10004,
    errorMsg: '用户删除失败'
  }
}