const express = require('express');
const app = express();
const api = require('./api/api');

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/', api);

// set up global error handling
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(error);
  }
});

module.exports = app;
