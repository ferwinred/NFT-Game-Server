const jwt = require("jsonwebtoken");
const { recoverPersonalSignature } = require("eth-sig-util");
const { bufferToHex } = require("ethereumjs-util");
const User = require("../models/User");
const Role = require("../models/Roles");
const { secret } = require("../lib/config");

const getLogin = async (req, res, next) => {
  try {
    const { publicAddress, signature } = req.body;

    console.log("body del auth: ", req.body);

    const user = await User.findOne({
      address: publicAddress,
    });

    console.log(user);

    if (!user)
      return res
        .status(400)
        .json({
          message: "No hay ningún usuario registrado con esa Public Address",
        });

    const msg = `you are logining in Cryptomillionaire with this nonce: ${user.nonce}`

    const bufferMsg = bufferToHex(Buffer.from(msg, "utf8"));
    console.log("buffer: ", bufferMsg);
    const address = recoverPersonalSignature({
      data: bufferMsg,
      sig: signature,
    });
    console.log("address: ", address);
    if (!(publicAddress === address))
      return res
        .status(400)
        .json({ message: "La signature no coincide con la Public Address" });

    const token = jwt.sign(
      { publicAddress, signature, role: user.role },
      secret,
      {
        expiresIn: "2h",
      }
    );

    console.log(token)

    res.json({
      token,
      role: user.role,
      user: publicAddress,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getLogin,
};
