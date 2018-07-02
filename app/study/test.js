const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
fs.readFileAsync('./a.txt', 'utf-8')
  .then(data => console.log(data))
