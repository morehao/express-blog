'use strict'
const errorHandler = module.exports = {}

errorHandler.nFound = function (req,res,next) {
  console.log('nFound')
  res.status(404).send({url: req.originalUrl + ' not found'})
}