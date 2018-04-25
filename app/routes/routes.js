'use strict';
const errorHandler = require("../middlewares/error.js")
module.exports = function(app) {
  const taskController = require('../controllers/tasks');
  const UserController = require('../controllers/users')
  const userController = new UserController({app})
  app.route('/users')
    .get(userController.list)
    .post(userController.create)

  // const middlewaresArr = [errorHandler.nFound, errorHandler.rejectd]
  // app.use(middlewaresArr)
  // tasks Routes
  app.route('/tasks')
    .get(taskController.list_all_tasks)
    .post(taskController.create_a_task)
  // app.route('/tasks', errorHandler.nFound)
  //   .get(taskController.list_all_tasks)
  //   .post(errorHandler.resolve,taskController.create_a_task);

  app.route('/tasks/:taskId')
    .get(taskController.read_a_task)
    .put(taskController.update_a_task)
    .delete(taskController.delete_a_task);
}