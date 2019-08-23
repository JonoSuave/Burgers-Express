const burgerRouter = require('express').Router();
var burgers = [
    {"burger": "No Mess Express",
    "description": "In a hurry and want a legend in a jiffy? Be sure to use two hand -- there's simply no messing around",
    "imageUrl": "images/burgers/no-mess.png",
    "price": "$6.98"},
    {"burger": "Slammin Jalapeño",
    "description": "Be ready to blow fire fellow dragon",
    "imageUrl": "images/burgers/jalapeno.png",
    "price": "$7.37"},
    {"burger": "I Want My Baby Back BBQ",
    "description": "Reclaim your love with the sultry crunch of tanginess",
    "imageUrl": "images/burgers/bbq.png",
    "price": "$6.98"},
    {"burger": "Loco Expo",
    "description": "Don't worry, we know...if you're here...you're a little loco",
    "imageUrl": "images/burgers/loco.png",
    "price": "$8.78"},
    {"burger": "The Moley to the Holy Guacamole",
    "description": "Ever wonder what made Nacho Libre fly? Look no further luchador",
    "imageUrl": "images/burgers/guacamole.jpeg",
    "price": "$7.78"},
    {"burger": "Funky Mushy",
    "description": "Watch out! The fungi got some funk!",
    "imageUrl": "images/burgers/mushroom.png",
    "price": "$5.37"}
];
var id = 0;

let updateId = function(req, res, next) {
    if (!req.body.id) {
      id++;
      req.body.id = id + '';
    }
    next();
  };

burgerRouter.param('id', function(req, res, next, id) {
    var burger = _.find(burgers, {id: id});
  
    if (burger) {
      req.burger = burger;
      next();
    } else {
      res.send();
    }
  });
  
  burgerRouter.get('/', function(req, res){
    res.json(burgers);
  });
  
  burgerRouter.get('/:id', function(req, res){
    var burger = req.burger;
    res.json(burger || {});
  });
  
  burgerRouter.post('/', updateId, function(req, res) {
    var burger = req.body;
  
    burgers.push(burger);
  
    res.json(burger);
  });
  
  
  burgerRouter.put('/:id', function(req, res) {
    var update = req.body;
    if (update.id) {
      delete update.id
    }
  
    var burger = _.findIndex(burgers, {id: req.params.id});
    if (!burgers[burger]) {
      res.send();
    } else {
        var updatedBurger = _.assign(burgers[burger], update);
        res.json(updatedBurger);
    }
  });

  module.exports = burgerRouter;

  