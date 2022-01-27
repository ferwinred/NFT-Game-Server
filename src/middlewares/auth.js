const jwt = require("jsonwebtoken");
const { secret } = require("../lib/config");
const Role = require("../models/Roles");

const checkRole = async (id, roleToCompare) => {
    const role = await Role.findById(id);
    return role.name === roleToCompare;
  
};

const tokenValidate = (req, res, next) => {
  try {
    const token = req.headers["x-token-access"];

    if (!token)
      return res.status(403).json({ error: "A JWT token is required" });

    const desencryptToken = jwt.verify(token, secret);

    res.locals.role = desencryptToken.role;
    res.locals.user = desencryptToken.publicAddress;

    // res.json(desencryptToken);
    console.log(desencryptToken);
    next();
  } catch (err) {
    res.status(401).json({ error: error.message });
  }
};

const isAdmin = (req, res, next) => {
  try {
    const { role } = res.locals;

    const isAdmin = checkRole(role, "admin");

    if(isAdmin){
        return res.status(403).json({ error: 'No tienes permisos para ingresar' })
    };

    next();
  } catch (err) {
    res.status(403).json({ error: 'No tienes permisos para ingresar' });
  }
};

module.exports = {
  tokenValidate,
  isAdmin
};
