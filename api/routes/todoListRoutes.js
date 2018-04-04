'use strict';
const errorHandler = require("../../middlewares/error.js")
module.exports = function(app) {
  const todoList = require('../controllers/todoListController');
  const middlewaresArr = [errorHandler.nFound, errorHandler.rejectd]
  app.use(middlewaresArr)
  // todoList Routes
  app.route('/tasks', errorHandler.nFound)
    .get(todoList.list_all_tasks)
    .post(errorHandler.resolve,todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
}