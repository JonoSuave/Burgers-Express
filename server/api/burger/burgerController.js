const Burger = require('./burgerModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
    Burger.findById(id)
        .populate('user')
        .exec()
        .then(function(burger) {
            if(!burger) {
                next(new Error(`No burger with that id`));
            } else {
                req.burger = burger;
                next();
            }
        }, function(err) {
            next(err);
        })
}

exports.get = function(req, res, next) {
    Burger.find({})
        .populate('user')
        .exec()
        .then(function(burgers){
            res.json(burgers);
        }, function(err) {
            next(err);
        })
};

exports.getOne = function(req, res, next) {
    let burger = req.burger;
    res.json(burger); 
};

exports.put = function(req, res, next) {
    let burger = req.burger;

    let update = req.body;

    _.merge(burger, update);

    burger.save(function(err, savedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(savedDoc);
        } 
    });
};

exports.post = function(req, res, next) {
    let newburger = req.body;

    Burger.create(newburger)
        .then(function(burger) {
            res.json(burger);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.burger.remove(function(err, removedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(removedDoc);
        }
    });
};
