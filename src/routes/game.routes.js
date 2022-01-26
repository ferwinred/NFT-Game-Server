const express = require('express')
const routes = express.Router()
const { getGames, getGame, createGame, updateGame, deleteGame } = require('../controllers/games.controllers')

routes.get('/', getGames)
routes.get('/:id', getGame)
routes.post('/', createGame)
routes.put('/:id', updateGame)
routes.delete('/:id', deleteGame)

module.exports=routes;