const mongoose = require('mongoose');
const { dbURI } = require('./lib/config')

const connect = async() => {
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'NFTGame'
    }).then(() => {
        console.log('DB connected!')
    }).catch((err) => {
        console.log(err)
    })
};

module.exports = connect