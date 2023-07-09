const { Joi, celebrate } = require('celebrate');

const createUserVerification = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).alphanum(),
    about: Joi.string().min(2).max(30).alphanum(),
    avatar: Joi.string(),
    email: Joi.string().required(),
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
    _id: Joi.string().required().length(24),
  }),
});

const updateUserByIdVerification = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).alphanum(),
    about: Joi.string().min(2).max(30).alphanum(),
  }),
});

const updateUserAvatarVerification = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string(),
  }),
});

module.exports = {
  createUserVerification,
  loginVerification,
  getUserByIdVerification,
  updateUserByIdVerification,
  updateUserAvatarVerification,
};
