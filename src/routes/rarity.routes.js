const express = require('express')
const routes = express.Router()
const { getRaritys, getRarity, createRarity, updateRarity, deleteRarity } = require('../controllers/rarity.controllers')

routes.get('/', getRaritys);
routes.get('/:id', getRarity);
routes.post('/', createRarity);
routes.put('/:id', updateRarity);
routes.delete('/:id', deleteRarity);

module.exports=routes;
