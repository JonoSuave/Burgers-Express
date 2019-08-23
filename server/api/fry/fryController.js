const Fry = require('./fryModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
    Fry.findById(id)
        .populate('user')
        .exec()
        .then(function(fry) {
            if(!fry) {
                next(new Error(`No fry with that id`));
            } else {
                req.fry = fry;
                next();
            }
        }, function(err) {
            next(err);
        })
}

exports.get = function(req, res, next) {
    Fry.find({})
        .then(function(frys){
            res.json(frys);
        }, function(err) {
            next(err);
        })
};

exports.getOne = function(req, res, next) {
    let fry = req.fry;
    res.json(fry); 
};

exports.put = function(req, res, next) {
    let fry = req.fry;

    let update = req.body;

    _.merge(fry, update);

    fry.save(function(err, savedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(savedDoc);
        } 
    });
};

exports.post = function(req, res, next) {
    let newfry = req.body;

    Fry.create(newfry)
        .then(function(fry) {
            res.json(fry);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.fry.remove(function(err, removedDoc) {
        if(err) {
            next(err);
        } else {
            res.json(removedDoc);
        }
    });
};
