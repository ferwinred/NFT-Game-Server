require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV || 'production',
    port: process.env.API_PORT || '8080',
    host: process.env.API_HOST || 'localhost',
    dbURI: process.env.DB_URI
};

module.exports = config;