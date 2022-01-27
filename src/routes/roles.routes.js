const express = require('express');
const router = express.Router();
const {getRoles, getRole, createRole, updateRole, deleteRole} = require('../controllers/roles.controllers')
const { tokenValidate, isAdmin } = require('../middlewares/auth');

router.use(tokenValidate);

router.get('/', getRoles)
router.get('/:id', getRole)
router.post('/', isAdmin, createRole)
router.put('/:id', isAdmin, updateRole)
router.delete('/:id', isAdmin, deleteRole)

module.exports=router;