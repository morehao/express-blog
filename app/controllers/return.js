'use strict'

class returnController {
  constructor (req, res) {

  }
  returnOk (req, res, data) {
    res.json({
      errorCode: 0,
      data: data
    })
  }
}
module.exports = new returnController()