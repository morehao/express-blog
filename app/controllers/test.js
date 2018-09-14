'use strict'
class TestController {
  async testResponse (req, res) {
    try {
      console.log('controller')
      // const oldWrite = res.write
      // const oldEnd = res.end
      // let chunks = []
      // res.write = (chunk) => {
      //   chunks.push(chunk)
      //   oldWrite.apply(res, arguments)
      // }
      // res.end = (chunk) => {
      //   if (chunk) {
      //     chunks.push(chunk)
      //   }
      //   let body = Buffer.concat(chunks).toString('utf8')
      //   console.log(req.path, body)
      //   oldEnd.apply(req, arguments)
      // }
      // console.log(chunks)
      res.send({data: 'request success!'})
    } catch (error) {
      res.sendErr(error)
    }
  }
}
module.exports = new TestController()
