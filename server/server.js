const express = require('express');
const app = express();
const api = require('./api/api');
const config = require('./config/config');
const logger = require('./utils/logger');
const auth = require('./auth/routes');

require('mongoose').connect(config.db.url, {useNewUrlParser: true});

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/', api);
app.use('/auth', auth);

// set up global error handling
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send('Oops');
});

module.exports = app;
