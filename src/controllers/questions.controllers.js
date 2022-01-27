const Question = require('../models/Question');

const getQuestions = async (req, res, next) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        next(err);
    }
}

const getQuestion = async (req, res, next) => {
    try {
        const { id } = req.params
        const questions = await Question.findById(id);
        res.json(questions);
    } catch (err) {
        next(err);
    }
}

const createQuestion = async (req, res, next) => {

    try {
        const question = new Question({
            gamgame_id:req.body.game_id,
            question:req.body.question,
            answers:req.body.answers,
            correct_ans: req.body.correct_ans
        })
        question.save((err)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                res.json({mensaje:"Question created"})
            }
        });
    } catch (err) {
        next(err);
    }
}

const updateQuestion = async (req, res, next) => {
    try{
        const { id } = req.params
        const { gamgame_id, question, answers, correct_ans } = req.body;

        Question.findByIdAndUpdate(id, {"$set":{ gamgame_id, question, answers, correct_ans }}, (err)=>{
            if(err){
                return res.status(404).json(err)
            }else{
                res.json({mensaje:`la información de la pregunta ha sido actualizada`})
            }
        })
    }catch(err){
        next(err);
    }
}

const deleteQuestion = async (req, res, next) => {
    try{
        const {id} = req.params
        const result= await Question.findByIdAndDelete(id)
        result? res.json({mensaje:`la pregunta se ha sido eliminado`}):res.status(400).json({mensaje:"No se encontraron coincidencias"});
    }catch(err){
        next(err);
    }
}

module.exports = { getQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion }