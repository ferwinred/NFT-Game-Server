const server = require('./src/app');
const db = require('./src/database');
const { port } = require('./src/lib/config');

db().then(() => {
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
    });
});