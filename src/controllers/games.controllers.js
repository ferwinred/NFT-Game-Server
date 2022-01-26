const Game = require('../models/Game');

const getGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        next(err);
    }
}

const getGame = async (req, res, next) => {
    try {
        const { id } = req.params
        const game = await Game.findById(id);
        res.json(game);
    } catch (err) {
        next(err);
    }
}

const createGame = async (req, res, next) => {
    try {
        const game = new Game({
            creator:req.body.creator,
            pivate_player: req.body.pivate_player,
            rewards: req.body.rewards  
        })
        game.save((err)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                res.json({mensaje:"Juego creado con exito"})
            }
        });
    } catch (err) {
        next(err);
    }
}

const updateGame = async (req, res, next) => {
    try{
        const { id } = req.params
        const { players, pivate_player, rewards } = req.body;

        if(rewards){
            Game.findByIdAndUpdate(id, {"$set":{ rewards }}, (err)=>{
                if(err){
                    return res.status(404).json(err)
                }else{
                    res.json({mensaje:`la información del juego ha sido actualizada`})
                }
            })
        }

        if(pivate_player){

            pivate_player.forEach(pivate_player => {
                Game.findByIdAndUpdate(id, {"$push":{ pivate_player }}, (err)=>{
                    if(err){
                        return res.status(404).json(err)
                    }else{
                        res.json({mensaje:`la información del juego ha sido actualizada`})
                    }
                })
            }); 
        }

        if(players){
            Game.findByIdAndUpdate(id, {"$push":{ players }}, (err)=>{
                if(err){
                    return res.status(404).json(err)
                }else{
                    res.json({mensaje:`La lista de jugadores ha sido actualizada`})
                }
            })
        }
        
    }catch(err){
        next(err);
    }
}

const deleteGame = async (req, res, next) => {
    try{
        const {id} = req.params
        const result= await Game.findByIdAndDelete(id)
        result? res.json({mensaje:`el juego ha sido eliminado`}):res.status(400).json({mensaje:"No se encontraron coinsidencias"});
    }catch(err){
        next(err);
    }
}

module.exports = { getGames, getGame, createGame, updateGame, deleteGame }