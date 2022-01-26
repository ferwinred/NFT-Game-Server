const express = require('express');
const routes = express.Router();
const {getNfts, getNft, createNft, updateNft, deleteNft} = require('../controllers/nfts.controllers')

routes.get('/', getNfts);
routes.get('/:id', getNft);
routes.post('/', createNft);
routes.put('/:id', updateNft);
routes.delete('/:id', deleteNft);

module.exports=routes;
