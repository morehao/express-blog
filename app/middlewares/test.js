'use strict'

module.exports = (req, res, next) => {
  try {
    console.log('1111111111111')
    console.log('test')
    const oldWrite = res.write
    const oldEnd = res.end
    let chunks = []
    res.write = (chunk) => {
      console.log('11:', chunk)
      chunks.push(chunk)
      oldWrite.apply(res, arguments)
    }
    res.end = (chunk) => {
      if (chunk) {
        chunks.push(chunk)
      }
      // let body = Buffer.concat(chunks).toString('utf8')
      // console.log(req.path, body)
      console.log('arguments:', chunks)
      oldEnd.apply(req, arguments)
    }
    console.log(chunks)
    next()
  } catch (error) {
    console.log('222222222222')
  }
}
