'use strict'
const log = require('../../config/log.js')

module.exports = async (req, res, next) => {
  // 响应开始时间
  const start = new Date()
  // 响应间隔时间
  let ms
  ms = new Date() - start
  try {
    // 开始进入到下一个中间件
    await next()
    // 记录响应日志
    log.i(req, ms)
  } catch (error) {
    // 记录异常日志
    log.e(req, error, ms)
  }
  console.log(`${start} ${req.method} ${req.url} - ${ms}ms-${res.statusCode}`)
}
