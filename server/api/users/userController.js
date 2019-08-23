const User = require('./userModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
    User.findById(id)
        .then(function(user) {
            if(!user) {
                next(new Error(`No user with that id`));
            } else {
                req.user = user;
                next();
            }
        }, function(err) {
            next(err);
        })
}

exports.get = function(req, res, next) {
    User.find({})
        .then(function(users){
            res.json(users);
        }, function(err) {
            next(err);
        })
};

exports.getOne = function(req, res, next) {
    let user = req.user;
    res.json(user); 
};

exports.put = function(req, res, next) {
    let user = req.user;

    let update = req.body;

    _.merge(user, update);

    user.save(function(err, savedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(savedDoc);
        } 
    });
};

exports.post = function(req, res, next) {
    let newuser = req.body;

    User.create(newuser)
        .then(function(user) {
            res.json(user);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err, removedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(removedDoc);
        }
    });
};
