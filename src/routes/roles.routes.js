const express = require('express');
const router = express.Router();
const {getRoles, getRole, createRole, updateRole, deleteRole} = require('../controllers/roles.controllers')

router.get('/', getRoles)
router.get('/:id', getRole)
router.post('/', createRole)
router.put('/:id', updateRole)
router.delete('/:id', deleteRole)

module.exports=router;