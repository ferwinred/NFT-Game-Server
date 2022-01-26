const express = require('express');
const routes = express.Router();
const { getLogin } = require('../controllers/auth')

routes.post('/', getLogin)


module.exports = routes