'use strict'
module.exports = (req, res, next) => {
  const oldWrite = res.write
  const oldEnd = res.end
  let chunks = []
  res.write = (chunk) => {
    chunks.push(chunk)
    oldWrite.apply(res, arguments)
  }
  res.end = (chunk) => {
    if (chunk) {
      chunks.push(chunk)
    }
    let body = Buffer.concat(chunks).toString('utf8')
    console.log(req.path, body)
    oldEnd.apply(req, arguments)
  }
  next()
}
