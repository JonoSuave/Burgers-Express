const Shake = require('./shakeModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
    Shake.findById(id)
        .populate('user')
        .exec()
        .then(function(shake) {
            if(!shake) {
                next(new Error(`No shake with that id`));
            } else {
                req.shake = shake;
                next();
            }
        }, function(err) {
            next(err);
        })
}

exports.get = function(req, res, next) {
    Shake.find({})

        .then(function(shakes){
            res.json(shakes);
        }, function(err) {
            next(err);
        })
};

exports.getOne = function(req, res, next) {
    let shake = req.shake;
    res.json(shake); 
};

exports.put = function(req, res, next) {
    let shake = req.shake;

    let update = req.body;

    _.merge(shake, update);

    shake.save(function(err, savedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(savedDoc);
        } 
    });
};

exports.post = function(req, res, next) {
    let newshake = req.body;

    Shake.create(newshake)
        .then(function(shake) {
            res.json(shake);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.shake.remove(function(err, removedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(removedDoc);
        }
    });
};
