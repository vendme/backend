require('dotenv').config()

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/vendme.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/development'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/production'
    },
    useNullAsDefault: true
	},
	
	test: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    }

}
