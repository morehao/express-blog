'use strict'
module.exports = {
  USER_HAS_EXITS: {
    errorCode: 100000,
    errorMsg: '该用户已经存在'
  },
  USER_NOT_EXITS: {
    errorCode: 100001,
    errorMsg: '该用户不存在'
  },
  USER_QUERY_FAILED: {
    errorCode: 100002,
    errorMsg: '用户查询失败'
  },
  USER_UPDATE_FAILED: {
    errorCode: 100003,
    errorMsg: '用户更新失败'
  },
  USER_DELETE_FAILED: {
    errorCode: 100004,
    errorMsg: '用户删除失败'
  },
  USER_PASSWORD_WRONG: {
    errorCode: 100005,
    errorMsg: '用户密码错误'
  },
  USER_LOGIN_FAILED: {
    errorCode: 100006,
    errorMsg: '用户登录失败'
  },
  TOKEN_IS_MISSING: {
    errorCode: 100007,
    errorMsg: 'token缺失'
  },
  TOKEN_IS_INVALID: {
    errorCode: 100008,
    errorMsg: 'token无效'
  },
  TOKEN_HAS_EXPIRED: {
    errorCode: 100009,
    errorMsg: 'token已经过期'
  },
  LIST_QUERY_FAILDE: {
    errorCode: 20000,
    errorMsg: '列表查询失败'
  }
}