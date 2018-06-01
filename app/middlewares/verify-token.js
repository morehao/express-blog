'use strict'
const {auth, resHandler} = require('../myutil')

module.exports = (req, res, next) => {
  const headers = req.headers
  if (!headers.token) {
    const errorRes = resHandler.getErrorRes('TOKEN_IS_MISSING')
    res.sendErr(errorRes)
    return
  }
  try {
    const result = auth.verifyToken(headers.token)
    next()
  } catch (error) {
    const errorRes = resHandler.getErrorMsg(error)
    res.sendErr(errorRes)  
  }
}