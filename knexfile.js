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
			directory: './data/seeds',
		},
	},
}; 
