const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || '3300';

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

app.get('/getmyName', (req, res, next) => {
  res.status(200).json({ route: req.query.name ? req.query.name : 'No Name Specified in the QueryParam' });
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