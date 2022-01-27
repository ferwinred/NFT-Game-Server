const express = require('express');
const router = express.Router();
const {getNfts, getNft, createNft, updateNft, deleteNft} = require('../controllers/nfts.controllers')
const { tokenValidate, isAdmin } = require('../middlewares/auth');

router.use(tokenValidate);

router.get('/', getNfts);
router.get('/:id', getNft);
router.post('/', isAdmin, createNft);
router.put('/:id', isAdmin, updateNft);
router.delete('/:id', isAdmin,deleteNft);

module.exports=router;
