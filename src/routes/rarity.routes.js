const express = require('express')
const router = express.Router()
const { getRaritys, getRarity, createRarity, updateRarity, deleteRarity } = require('../controllers/rarity.controllers')
const { tokenValidate, isAdmin } = require('../middlewares/auth');

router.use(tokenValidate);

router.get('/', getRaritys);
router.get('/:id', getRarity);
router.post('/', isAdmin, createRarity);
router.put('/:id', isAdmin, updateRarity);
router.delete('/:id', isAdmin, deleteRarity);

module.exports=router;
