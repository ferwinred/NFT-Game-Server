const express = require('express')
const router = express.Router()
const { getQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion } = require('../controllers/questions.controllers')
const { tokenValidate } = require('../middlewares/auth');

router.use(tokenValidate);

router.get('/', getQuestions)
router.get('/:id', getQuestion)
router.post('/', createQuestion)
router.put('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)

module.exports=router;