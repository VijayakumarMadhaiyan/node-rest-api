const mongoose = require('mongoose');

let app = require('./app/index');

const PORT = process.env.PORT || '3300';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true }).then(res => {
  app.listen(PORT, function (err) {
    if (err) {
      console.log(err)
    }
    else {
      console.log('server started')
    }
  })
}).catch(err => {
  console.log(err)
})