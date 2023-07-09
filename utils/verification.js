const { Joi, celebrate } = require('celebrate');

// Доработать регулярное выражение
const reg = /^https?:\/\/[a-z0-9-._~:\\/?#[\]@!$&'()*+,;=]*\.[a-z0-9-._~:\\/?#[\]@!$&'()*+,;=]*$/;

const createUserVerification = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(reg),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const loginVerification = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const getUserByIdVerification = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
});

const updateUserByIdVerification = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

const updateUserAvatarVerification = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(reg),
  }),
});

const createCardVerification = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().regex(reg),
  }),
});

const likeDislikeAndDeleteVerification = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  createUserVerification,
  loginVerification,
  getUserByIdVerification,
  updateUserByIdVerification,
  updateUserAvatarVerification,
  createCardVerification,
  likeDislikeAndDeleteVerification,
};
