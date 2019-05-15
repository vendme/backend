require('dotenv').config(); 
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/vendme.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.databaseBASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    }
  }

};