const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  updateUserAvatar,
} = require('../controllers/user');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUserById);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
