const express = require('express');
const routes = express.Router();
const user = require('./user.routes');

routes.use('/users', user);

module.exports = routes;