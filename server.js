const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Postcard = require('./api/models/postcardsModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb://${process.env.dbuser}:${process.env.dbpassword}@ds259878.mlab.com:59878/heroku_s08cx6xg`, 
  { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/postcardsRoutes'); 
routes(app); 

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('API server started on: ' + port);