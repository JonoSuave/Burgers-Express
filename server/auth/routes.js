const router = require('express').Router();
const controller = require('./controller');
const verifyUser = require('./auth').verifyUser;

// before we send back a jwt, lets check
// the password and username match what is in the DB
//verifyUser() is middleware so req will be available to grab by the verifyUser function
router.post('/signin', verifyUser(), controller.signin);

module.exports = router;
