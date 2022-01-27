const express = require('express');
const routes = express.Router();
const user = require('./user.routes');
const roles = require('./roles.routes');
const nfts = require('./nfts.routes');
const rarity = require('./rarity.routes');
const questions = require('./questions.routes');
const games = require('./game.routes');

routes.use('/users', user);
routes.use('/roles', roles);
routes.use('/nfts', nfts);
routes.use('/raritys', rarity);
routes.use('/questions', questions);
routes.use('/games', games);

module.exports = routes;