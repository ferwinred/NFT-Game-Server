const express = require('express');
const router = express.Router();
const auth = require('./auth.routes');
const user = require('./user.routes');
const roles = require('./roles.routes');
const nfts = require('./nfts.routes');
const rarity = require('./rarity.routes');
const questions = require('./questions.routes');
const games = require('./game.routes');


router.use('/login', auth)
router.use('/users', user);
router.use('/roles', roles);
router.use('/nfts', nfts);
router.use('/raritys', rarity);
router.use('/questions', questions);
router.use('/games', games);

module.exports = router;