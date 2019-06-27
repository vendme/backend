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
			directory: './database/seeds/development',
		},
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './database/migrations',
			tableName: 'vendmeprod_migrations',
		},
		seeds: {
			directory: './database/seeds/productions',
		},
		useNullAsDefault: true,
	},
};

/* module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://localhost/<examples>',
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/dev',
		},
		useNullAsDefault: true,
	},

	test: {
		client: 'pg',
		connection: 'postgres://localhost/<examples_test>',
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/test',
		},
		useNullAsDefault: true,
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/production',
		},
		useNullAsDefault: true,
	},
};
 */

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
			tableName: 'vendme_migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
