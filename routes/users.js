const router = require('express').Router();

const {
  getUserByIdVerification,
  updateUserByIdVerification,
  updateUserAvatarVerification,
} = require('../utils/verification');

const {
  getUsers,
  getUserById,
  updateUserById,
  updateUserAvatar,
  getCurrentUser,
} = require('../controllers/user');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', getUserByIdVerification, getUserById);
router.patch('/me', updateUserByIdVerification, updateUserById);
router.patch('/me/avatar', updateUserAvatarVerification, updateUserAvatar);

module.exports = router;
