'use strict'
// const multer = require('multer')
// const upload = multer({dest: 'upload/'}).single('file')

const Controllers = require('../controllers')
const middleware = require('../middlewares')
const middlewaresArr = [middleware.verifyToken]

module.exports = function (app) {
  app.post('/users/test', Controllers.users.test)
  app.post('/user/login', Controllers.users.login)
  app.post('/user', Controllers.users.create)
  app.use(middlewaresArr)
  app.route('/user')
    .get(Controllers.users.list)
  app.route('/user/:_id')
    .get(Controllers.users.detail)
    .put(Controllers.users.update)
    .delete(Controllers.users.destroy)
  app.route('/category')
    .post(Controllers.category.create)
    .get(Controllers.category.list)
  app.route('/category/:_id')
    .get(Controllers.category.detail)
    .put(Controllers.category.update)
  app.route('/article')
    .post(Controllers.article.create)
    .get(Controllers.article.list)
  app.route('/article/:_id')
    .get(Controllers.article.detail)
    .put(Controllers.article.update)
  // app.route('/upload')
  //   .post(upload, Controllers.article.upload)
  app.route('/upload')
    .post(Controllers.article.upload)
  app.route('/test')
    .post(Controllers.test.testResponse)

  // app.post(Controllers.test.test)

  app.use('/test1', Controllers.test.test)
}
