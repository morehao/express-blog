'use strict'

const Parameter = require('parameter')

const { testRule } = require('../myutil/parameter-rule')

const parameter = new Parameter({
  validateRoot: true,
  convert: true
})

module.exports = (req, res, next) => {
  try {
    const params = req.body
    const checkFun = () => {
      return parameter.t('should be false')
    }
    parameter.addRule('string', checkFun)
    const errors = parameter.validate(testRule, params)
    if (errors) throw errors
    next()
  } catch (error) {
    res.sendErr(error)
  }
}
