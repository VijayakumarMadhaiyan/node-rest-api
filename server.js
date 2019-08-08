const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || '3300';

app.use(bodyParser.json());

app.get('/getmyName', (req, res, next) => {
  res.status(200).json({ route: req.query.name ? req.query.name : 'No Name Specified' });
});

app.post('/getmyName1', (req, res, next) => {
  res.status(200).json(req.body);
});

app.listen(PORT, function (err) {
  if (err) {
    console.log(err)
  }
  else {
    console.log('server started')
  }
})