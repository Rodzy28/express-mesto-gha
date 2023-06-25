const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '6497f5cc63e0092a3da68fcf',
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
