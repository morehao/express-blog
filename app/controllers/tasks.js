'use strict'
const mongoose = require('mongoose')
const mdbs = require('../models')

exports.list_all_tasks = function(req, res) {
  mdbs.Task.find({}, function(err, task) {
    if (err)
      res.send(err)
      res.json(task)
  })
}

exports.create_a_task = function(req, res) {
  console.log('create_task')
  var new_task = new mdbs.Task(req.body)
  new_task.save(function(err, task) {
    if (err)
      res.send(err)
      res.json(task)
  })
}


exports.read_a_task = function(req, res) {
  mdbs.Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err)
      res.json(task)
  })
}


exports.update_a_task = function(req, res) {
  mdbs.Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err)
      res.json(task)
  })
}


exports.delete_a_task = function(req, res) {
  mdbs.Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err)
      res.json({ message: 'Task successfully deleted' })
  })
}
