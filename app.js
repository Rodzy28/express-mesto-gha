const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const limiter = require('./utils/rateLimit');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use(router);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
