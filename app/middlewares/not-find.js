'use strict'
// 404错误处理中间件
const {resHandler} = require('../myutil')

module.exports = (req, res, next) => {
  const errorRes = resHandler.getErrorRes('NOT_FIND_ROUTE')
  res.sendErr(errorRes)
}
