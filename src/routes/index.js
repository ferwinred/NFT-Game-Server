const express = require('express');
const routes = express.Router();
const auth = require('./auth.routes');

routes.use('/login', auth)

module.exports = routes;