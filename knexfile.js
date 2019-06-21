
require('dotenv').config();

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/vendme.db3',
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
	connection: process.env.DATABASE_URL,
	migrations: {
	  directory: './database/migrations',
	  tableName: 'vendme_migrations'
	},
	seeds: {
	  directory: './data/seeds'
	}
  }
} 

