'use strict'
const successHandler = require('../middlewares/success-handler')
const errorHandler = require('../middlewares/error-handler')
const Controllers = require('../controllers')
const middleware = require('../middlewares')

const middlewaresArr = [successHandler, middleware.verifyToken]

module.exports = function (app) {
  app.post('/users/test', Controllers.users.test)
  app.post('/users/login', Controllers.users.login)
  app.post('/users', Controllers.users.create)
  app.use(middlewaresArr)
  app.route('/users')
    .get(Controllers.users.list)
  app.route('/users/:_id')
    .get(Controllers.users.detail)
    .put(Controllers.users.update)
    .delete(Controllers.users.destroy)
  app.route('/article-category')
    .post(Controllers.articleCategory.create)
    .get(Controllers.articleCategory.list)
  app.route('/article-category/:_id')
    .put(Controllers.articleCategory.update)
  // 错误处理中间件
  app.use(errorHandler)
}
