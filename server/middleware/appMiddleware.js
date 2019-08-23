const morgan = require('morgan');
const bodyParser = require('body-parser');
// const express = require('express');
// setup global middleware here

module.exports = function(app) {
    // app.use(express.static('client')); 
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};