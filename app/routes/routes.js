'use strict';
const successHandler = require('../middlewares/success-handler')
const errorHandler = require('../middlewares/error-handler')

module.exports = function(app) {
  const Controllers = require('../controllers')
  const middlewaresArr = [successHandler]
  app.use(middlewaresArr)
  app.route('/users')
    .get(Controllers.users.list)
    .post(Controllers.users.create)
  app.route('/users/:_id')
    .get(Controllers.users.detail)
    .put(Controllers.users.update)
    .delete(Controllers.users.destroy)

  //错误处理中间件
  app.use(errorHandler)
}