'use strict'

const Controllers = require('../controllers')

module.exports = (app) => {
  app.route('/category')
    .post(Controllers.category.create)
    .get(Controllers.category.list)
  app.route('/category/:_id')
    .get(Controllers.category.detail)
    .put(Controllers.category.update)
}
