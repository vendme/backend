// update file
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const databaseEngine = process.env.DATABASE_ENV || 'development';


// module.exports = knex(knexConfig.development);
module.exports = knex(knexConfig[databaseEngine]);
