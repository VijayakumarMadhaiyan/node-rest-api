const express = require('express');
const bodyParser = require('body-parser');

const task = require('./models/todo');
const taskRoute = require('./routes/tasks');

const app = express();

app.use(bodyParser.json());

/* CORS config */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, PATCH, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/tasks', taskRoute);

app.post('/getmyName1', (req, res, next) => {
  res.status(200).json(req.body);
});


module.exports = app;