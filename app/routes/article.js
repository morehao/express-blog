'use strict'

const Controllers = require('../controllers')

module.exports = (app) => {
  app.route('/article')
    .post(Controllers.article.create)
    .get(Controllers.article.list)
  app.route('/article/:_id')
    .get(Controllers.article.detail)
    .put(Controllers.article.update)
}
