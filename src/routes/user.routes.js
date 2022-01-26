const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/users.controllers')

router.get('/', getUsers)
router.get('/:address', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports=router;