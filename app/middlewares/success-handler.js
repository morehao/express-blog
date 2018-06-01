'use strict'
module.exports = async (req, res, next) => {
  // console.log('successHandler')
  await next()
}
