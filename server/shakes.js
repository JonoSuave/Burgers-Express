const _ = require('lodash');
const shakesRouter = require('express').Router();
var shakes = [];
var id = 0;

let updateId = function(req, res, next) {
    if (!req.body.id) {
      id++;
      req.body.id = id + '';
    }
    next();
  };

shakesRouter.param('id', function(req, res, next, id) {
    var shake = _.find(shakes, {id: id});
  
    if (shake) {
      req.shake = shake;
      next();
    } else {
      res.send();
    }
  });
  
  shakesRouter.get('/', function(req, res){
    res.json(shakes);
  });
  
  shakesRouter.get('/:id', function(req, res){
    var shake = req.shake;
    res.json(shake || {});
  });
  
  shakesRouter.post('/', updateId, function(req, res) {
    var shake = req.body;
  
    shakes.push(shake);
  
    res.json(shake);
  });
  
  
  shakesRouter.put('/:id', function(req, res) {
    var update = req.body;
    if (update.id) {
      delete update.id
    }
  
    var shake = _.findIndex(shakes, {id: req.params.id});
    if (!shakes[shake]) {
      res.send();
    } else {
        var updatedshake = _.assign(shakes[shake], update);
        res.json(updatedshake);
    }
  });

  module.exports = shakesRouter;