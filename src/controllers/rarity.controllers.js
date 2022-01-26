const Rarity = require('../models/Rarity');

const getRaritys = async (req, res, next) => {
    try {
        const rarity = await Rarity.find();
        res.json(rarity);
    } catch (err) {
        next(err);
    }
}

const getRarity = async (req, res, next) => {
    try {
        const { id } = req.params
        const rarity = await Rarity.findById(id);
        res.json(rarity);
    } catch (err) {
        next(err);
    }
}

const createRarity = async (req, res, next) => {
    try {
        const rarity = new Rarity({
            name:req.body.name,
            wildcard:[]
        })
        rarity.save((err)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                res.json({mensaje:"Nueva rareza creada"})
            }
        });
    } catch (err) {
        next(err);
    }
}

const updateRarity = async (req, res, next) => {
    try{
        const { id } = req.params
        const {name, wildcard} = req.body;

        Rarity.findByIdAndUpdate(id, {"$set":{ name, wildcard }}, (err)=>{
            if(err){
                return res.status(404).json(err)
            }else{
                res.json({mensaje:`la rareza ha sido actualizada`})
            }
        })
    }catch(err){
        next(err);
    }
}

const deleteRarity = async (req, res, next) => {
    try{
        const {id} = req.params
        const result= await Rarity.findByIdAndDelete(id)
        result? res.json({mensaje:`La rareza se ha eliminado`}):res.status(400).json({mensaje:"No existe el usuario"});
    }catch(err){
        next(err);
    }
}

module.exports = { getRaritys, getRarity, createRarity, updateRarity, deleteRarity }