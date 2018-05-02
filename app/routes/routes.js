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
    .put(Controllers.users.error)
    .delete(Controllers.users.show)
  app.route('/user')
    .get(Controllers.users.show)
  // const middlewaresArr = [errorHandler.nFound, errorHandler.rejectd]
  // app.use(middlewaresArr)
  // tasks Routes
  app.route('/tasks')
    .get(Controllers.tasks.list_all_tasks)
    .post(Controllers.tasks.create_a_task)
  // app.route('/tasks', errorHandler.nFound)
  //   .get(taskController.list_all_tasks)
  //   .post(errorHandler.resolve,taskController.create_a_task);

  app.route('/tasks/:taskId')
    .get(Controllers.tasks.read_a_task)
    .put(Controllers.tasks.update_a_task)
    .delete(Controllers.tasks.delete_a_task);

  //错误处理中间件
  app.use(errorHandler)
}