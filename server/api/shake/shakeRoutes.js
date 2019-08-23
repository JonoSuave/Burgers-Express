const router = require('express').Router();
const logger = require('../../utils/logger');
const controller = require('./shakeController');
const createRoutes = require('../../utils/createRoutes');

createRoutes(controller, router);

module.exports = router;
