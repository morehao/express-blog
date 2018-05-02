'use strict'

module.exports = async (err,req,res,next) => {
  console.log('erriorHandler')
  console.log('err-essage:',err.message)
  res.sendErr(err.message)
  await next()
}