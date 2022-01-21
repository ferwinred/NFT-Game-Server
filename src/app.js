const express = require('express');
const cors =  require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/handleError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use('/api', routes);
app.use(notFound);
app.use(error);

module.exports = app