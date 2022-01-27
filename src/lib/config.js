require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV || 'production',
    port: process.env.API_PORT || '8080',
    host: process.env.API_HOST || 'localhost',
    dbURI: process.env.DB_URI || 'mongodb+srv://andialecon:tejelo2010@cluster0.zrw4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    secret: process.env.SECRET,
    cors: process.env.CORS
};

module.exports = config;