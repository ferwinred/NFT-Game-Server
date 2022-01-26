const User = require('../models/User');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const { address } = req.params
        const user = await User.findOne({address});
        res.json(user);
    } catch (err) {
        next(err);
    }
}

const createUser = async (req, res, next) => {
    try {
        console.log("llega")
        const user = new User({
            address:req.body.address,
            role:"estudiante",
            nonce: Math.floor(Math.random() * (10000000 - 1)) + 1,
            role:req.body.role        
        })
        user.save((err)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                res.json({mensaje:"Usuario creado con exito"})
            }
        });
    } catch (err) {
        next(err);
    }
}

const updateUser = async (req, res, next) => {
    try{
        const { id } = req.params
        const {address, nonce, role} = req.body;

        User.findByIdAndUpdate(id, {"$set":{address, nonce, role}}, (err, usuario)=>{
            if(err){
                return res.status(404).json(err)
            }else{
                res.json({mensaje:`la información del usuario ha sido actualizada`})
            }
        })
    }catch(err){
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const {id} = req.params
        const result= await User.findByIdAndDelete(id)
        result? res.json({mensaje:`el usuario ${result.address} ha sido eliminado`}):res.status(400).json({mensaje:"No existe el usuario"});
    }catch(err){
        next(err);
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser}