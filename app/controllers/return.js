'use strict'

class returnController {
  constructor (req, res) {

  }
  returnOk (req,res,data) {
    console.log('data:',data)
    res.json({
      errorCode: 0,
      data: data
    })
  }
}
module.exports = new returnController()