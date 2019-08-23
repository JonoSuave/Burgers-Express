const router = require('express').Router();

router.use('/burgers', require('./burger/burgerRoutes'));
router.use('/shakes', require('./shake/shakeRoutes'));
router.use('/users', require('./users/usersRouter'));
router.use('/fries', require('./fry/fryRouter'));

module.exports = router;