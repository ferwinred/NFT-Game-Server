const express = require('express')
const router = express.Router()
const { getGames, getGame, createGame, updateGame, deleteGame } = require('../controllers/games.controllers')
const { tokenValidate } = require('../middlewares/auth');

router.use(tokenValidate);

router.get('/', getGames)
router.get('/:id', getGame)
router.post('/', createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports=router;