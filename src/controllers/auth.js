const jwt = require('jsonwebtoken');
const { recoverPersonalSignature } = require('eth-sig-util');
const { bufferToHex } = require('ethereumjs-util');
const User = require('../models/User');
const Role = require('../models/Roles');

const getLogin = async (req, res, next) => {
    try {

        const {publicAddress, signature} = req.body

        const user = await User.findOne({
            publicAddress
          });

        if(!user) return res
        .status(400)
        .json({ message: 'No hay ningún usuario registrado con esa Public Address' });


        const msg = `you are logining in Cryptomillionaire with this nonce: ${user.nonce}`

        const bufferMsg = bufferToHex(Buffer.from(msg, 'utf8'));

        const address = recoverPersonalSignature({
            data: bufferMsg,
            sig: signature,
        });

        res.json(address);


    } catch (err) {
        next(err)
    }
};


module.exports = {
    getLogin,
}