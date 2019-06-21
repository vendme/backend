require('dotenv').config(); // load .env variables
const server = require('./api/server.js');

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
