const Nft = require('../models/Nfts');

const getNfts = async (req, res, next) => {
    try {
        const nfts = await Nft.find();
        res.json(nfts);
    } catch (err) {
        next(err);
    }
}

const getNft = async (req, res, next) => {
    try {
        const { id } = req.params
        const nft = await Nft.findById(id);
        res.json(nft);
    } catch (err) {
        next(err);
    }
}

const createNft = async (req, res, next) => {
    try {
        const nft = new Nft({
            token:req.body.token,
            rarity:req.body.rarity,
            owner: req.body.owner 
        })
        nft.save((err)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                res.json({mensaje:"Nft registrado con exito"})
            }
        });
    } catch (err) {
        next(err);
    }
}

const updateNft = async (req, res, next) => {
    try{
        const { id } = req.params
        const {rarity, token, owner} = req.body;

        Nft.findByIdAndUpdate(id, {"$set":{ rarity, token, owner }}, (err)=>{
            if(err){
                return res.status(404).json(err)
            }else{
                res.json({mensaje:`la información del Nft ha sido actualizada`})
            }
        })
    }catch(err){
        next(err);
    }
}

const deleteNft = async (req, res, next) => {
    try{
        const {id} = req.params
        const result= await Nft.findByIdAndDelete(id)
        result? res.json({mensaje:`el nft ha sido eliminado`}):res.status(400).json({mensaje:"Nft no encontrado"});
    }catch(err){
        next(err);
    }
}

module.exports = { getNfts, getNft, createNft, updateNft, deleteNft }