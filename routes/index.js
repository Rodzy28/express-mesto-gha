const router = require('express').Router();
const userRoutes = require('./users');
const cardRoutes = require('./cards');

router.use('*', (req, res) => {
  res.status(404).send('Page Not Found');
});
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);

module.exports = router;
