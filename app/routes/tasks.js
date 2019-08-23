const express = require('express');

const taskController = require('../controllers/tasks');

const tasksRoute = express.Router();

tasksRoute.get('/', taskController.tasksList);

module.exports = tasksRoute;