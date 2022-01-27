const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/users.controllers')
const { tokenValidate, isAdmin } = require('../middlewares/auth');


router.get('/', getUsers)
router.get('/:address',  getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', tokenValidate, isAdmin, deleteUser)

module.exports=router;