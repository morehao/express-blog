'use strict'
module.exports = {
  SERVER_ERROR: {
    status: 200,
    errorCode: 110000,
    errorMsg: '服务器开小差去了'
  },
  USER_HAS_EXITS: {
    status: 200,
    errorCode: 100000,
    errorMsg: '该用户已经存在'
  },
  USER_NOT_EXITS: {
    status: 200,
    errorCode: 100001,
    errorMsg: '该用户不存在'
  },
  USER_QUERY_FAILED: {
    status: 200,
    errorCode: 100002,
    errorMsg: '用户查询失败'
  },
  USER_UPDATE_FAILED: {
    status: 200,
    errorCode: 100003,
    errorMsg: '用户更新失败'
  },
  USER_DELETE_FAILED: {
    status: 200,
    errorCode: 100004,
    errorMsg: '用户删除失败'
  },
  USER_PASSWORD_WRONG: {
    status: 200,
    errorCode: 100005,
    errorMsg: '用户密码错误'
  },
  USER_LOGIN_FAILED: {
    status: 200,
    errorCode: 100006,
    errorMsg: '用户登录失败'
  },
  TOKEN_IS_MISSING: {
    status: 200,
    errorCode: 100007,
    errorMsg: 'token缺失'
  },
  TOKEN_IS_INVALID: {
    status: 200,
    errorCode: 100008,
    errorMsg: 'token无效'
  },
  TOKEN_HAS_EXPIRED: {
    status: 200,
    errorCode: 100009,
    errorMsg: 'token已经过期'
  },
  USER_ADD_FAILED: {
    status: 200,
    errorCode: 100010,
    errorMsg: '用户创建失败'
  },
  LIST_QUERY_FAILDE: {
    status: 200,
    errorCode: 200000,
    errorMsg: '列表查询失败'
  },
  USERLIST_FIND_FAILDE: {
    status: 200,
    errorCode: 200001,
    errorMsg: '用户列表查询失败'
  }
}
