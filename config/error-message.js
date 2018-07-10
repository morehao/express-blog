'use strict'
/*
所有接口的status均为200；
errorCode规则：当errorCode为0时表示接口访问成功并且无抛错；不为零时，errorCode共计五位，
第一位表示错误级别，1开头的为系统级别错误，2开头为系统功能模块对应的错误，其中，第二三位
表示功能模块编号，第四五位表示具体错误编号。
*/
module.exports = {
  // 系统级别错误
  SERVER_ERROR: {
    status: 200,
    errorCode: 10001,
    errorMsg: '服务器开小差去了'
  },
  LIST_QUERY_FAILDE: {
    status: 200,
    errorCode: 10002,
    errorMsg: '列表查询失败'
  },
  // token认证模块错误
  TOKEN_IS_MISSING: {
    status: 200,
    errorCode: 20000,
    errorMsg: 'token缺失'
  },
  TOKEN_IS_INVALID: {
    status: 200,
    errorCode: 20001,
    errorMsg: 'token无效'
  },
  TOKEN_HAS_EXPIRED: {
    status: 200,
    errorCode: 20002,
    errorMsg: 'token已经过期'
  },
  // 用户管理模块错误
  USER_HAS_EXITS: {
    status: 200,
    errorCode: 20100,
    errorMsg: '该用户已经存在'
  },
  USER_NOT_EXITS: {
    status: 200,
    errorCode: 20101,
    errorMsg: '该用户不存在'
  },
  USER_PASSWORD_WRONG: {
    status: 200,
    errorCode: 20102,
    errorMsg: '用户密码错误'
  },
  USER_LOGIN_FAILED: {
    status: 200,
    errorCode: 20103,
    errorMsg: '用户登录失败'
  },
  USER_ADD_FAILED: {
    status: 200,
    errorCode: 20104,
    errorMsg: '用户创建失败'
  },
  USER_DELETE_FAILED: {
    status: 200,
    errorCode: 20105,
    errorMsg: '用户删除失败'
  },
  USER_UPDATE_FAILED: {
    status: 200,
    errorCode: 20106,
    errorMsg: '用户更新失败'
  },
  USER_QUERY_FAILED: {
    status: 200,
    errorCode: 20107,
    errorMsg: '用户查询失败'
  },
  USERLIST_FIND_FAILDE: {
    status: 200,
    errorCode: 20108,
    errorMsg: '用户列表查询失败'
  },
  // 路由管理模块错误
  ROUTER_HAS_EXITS: {
    status: 200,
    errorCode: 20200,
    errorMsg: '该路由已经存在'
  },
  ROUTER_NOT_EXITS: {
    status: 200,
    errorCode: 20201,
    errorMsg: '该路由不存在'
  }
}
