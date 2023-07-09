const router = require('express').Router();
const {
  createCardVerification,
  likeDislikeAndDeleteVerification,
} = require('../utils/verification');

const {
  getCards,
  createCard,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/card');

router.get('/', getCards);
router.post('/', createCardVerification, createCard);
router.delete('/:cardId', likeDislikeAndDeleteVerification, deleteCardById);
router.put('/:cardId/likes', likeDislikeAndDeleteVerification, likeCard);
router.delete('/:cardId/likes', likeDislikeAndDeleteVerification, dislikeCard);

module.exports = router;
