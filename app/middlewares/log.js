'use strict'
const uuidv4 = require('uuid/v4')
module.exports = (req, res, next) => {
  const headers = req.headers
  if (!headers.traceId) {
    headers.traceId = uuidv4()
  }
  const traceId = headers.traceId
  logger.info(`traceId:${traceId}`)
  next()
}
