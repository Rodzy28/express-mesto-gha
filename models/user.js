const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 30,
    default: 'Name',
  },
  about: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 30,
    default: 'About',
  },
  avatar: {
    type: String,
    require: true,
    default: 'https://partnerkin.com/storage/files/file_1640014534_1.webp',
  },
});

module.exports = mongoose.model('user', userSchema);
