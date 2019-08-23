// setup config first before anything by requiring it
var config = require('./server/config/config');
var app = require('./server/server');
var logger = require('./server/utils/logger');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);


