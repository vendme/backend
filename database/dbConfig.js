// update file
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const databaseEngine = 'development';
//const databaseEngine = 'development';

// module.exports = knex(knexConfig.development);
module.exports = knex(knexConfig[databaseEngine]);
