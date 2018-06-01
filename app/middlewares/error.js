'use strict'
const errorHandler = module.exports = {}

errorHandler.nFound = function (req, res, next) {
  console.log('nFound')
  // res.status(404).send({url: req.originalUrl + ' not found'})
  next()
}
errorHandler.rejectd = function (req, res, next) {
  console.log('rejected')
  next()
}
errorHandler.resolve = function (req, res, next) {
  console.log('resolve')
  next()
}
