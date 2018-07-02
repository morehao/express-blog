'use strict'

// callback style
const fs = require('fs')
fs.readFile('./a.txt', 'utf-8', (err, rst) => {
  if (err) throw err
  console.log('rst:', rst)
})

// promise style
// const fs = require('fs')
// function getTxt (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf-8', (err, data) => {
//       if (err) reject(err)
//       resolve(data)
//     })
//   })
// }
// getTxt('./a.txt')
//   .then(rst => console.log(rst))
// // or use Generator
// function * fun () {
//   yield getTxt('./a.txt')
//   // return file
// }
// const run = fun()
// run.next().value.then(data => console.log(data))
// or use async/await
// async function run (params) {
//   const file = await getTxt(params)
//   console.log('file:', file)
//   return file
// }
// run('./a.txt')

// bluebird promise style
// const Promise = require('bluebird')
// const fs = Promise.promisifyAll(require('fs'))
// function getTxt (filepath) {
//   return fs.readFileSync(filepath, 'utf-8')
// }
// console.log(getTxt('./a.txt'))
