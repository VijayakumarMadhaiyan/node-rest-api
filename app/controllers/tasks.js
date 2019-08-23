const task = require('../models/todo');


module.exports.tasksList = (req, res, next) => {
  task.find().then(tasks => {
    res.status(200).json({ data: tasks })
  });
}

module.exports.getTask = (req, res, next) => {
  res.status(200).json({ route: 'lists' })
}