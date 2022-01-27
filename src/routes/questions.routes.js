const express = require('express')
const routes = express.Router()
const { getQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion } = require('../controllers/questions.controllers')

routes.get('/', getQuestions)
routes.get('/:id', getQuestion)
routes.post('/', createQuestion)
routes.put('/:id', updateQuestion)
routes.delete('/:id', deleteQuestion)

module.exports=routes;