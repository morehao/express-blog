'use strict';
const errorHandler = require("../middlewares/error.js")
const successHandler = require('../middlewares/success-handler')
module.exports = function(app) {
  const Controllers = require('../controllers')
  
  app.use(successHandler)

  app.route('/users')
    .get(Controllers.users.list)
    .post(Controllers.users.create)

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
}