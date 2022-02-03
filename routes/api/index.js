const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;