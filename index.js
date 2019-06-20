require('dotenv').config(); // load .env variables
console.log('ENV Variables', process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.COOKIE_KEY, process.env.DATABASE_ENV)
const server = require('./api/server.js');

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
