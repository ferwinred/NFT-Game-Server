const Role = require('../models/Roles');

const getRoles = async (req, res, next) => {
    
    try {
        const { name } = req.query
        if(name){
           const result = await Role.findOne({name})
           return res.json(result); 
        } 
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        next(err);
    }
}

const getRole = async (req, res, next) => {
    try {
        const { id } = req.params
        const role = await Role.findById(id);
        res.json(role);
    } catch (err) {
        next(err);
    }
}

const createRole = async (req, res, next) => {
    try {
        const role = new Role({
            name:req.body.name        
        })
        role.save((err)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                res.json({mensaje:"Role created"})
            }
        });
    } catch (err) {
        next(err);
    }
}

const updateRole = async (req, res, next) => {
    try{
        const { id } = req.params
        const { name } = req.body;
        Role.findByIdAndUpdate(id, {"$set":{name}}, (err)=>{
            if(err){
                return res.status(404).json(err)
            }else{
                res.json({mensaje:`la información del role ha sido actualizada`})
            }
        })
    }catch(err){
        next(err);
    }
}

const deleteRole = async (req, res, next) => {
    try{
        const {id} = req.params
        const result= await Role.findByIdAndDelete(id)
        result? res.json({mensaje:`el role ${result.name} ha sido eliminado`}):res.status(400).json({mensaje:"No existe el usuario"});
    }catch(err){
        next(err);
    }
}

module.exports = { getRoles, getRole, createRole, updateRole, deleteRole}