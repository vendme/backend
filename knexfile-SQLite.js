require('dotenv').config();
const pg = require('pg');

const localPostgres = {
	host: process.env.HOST,
	database: process.env.DATABASE,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASS || '',
};

const dbConnection = process.env.DATABASE_URL;

const dbSqliteDev = {
	client: 'sqlite3',
	connection: {
		filename: './database/vendme.db3',
	},
	useNullAsDefault: true,
	migrations: {
		directory: './database/migrations',
	},
	seeds: {
		directory: './database/seeds/sqlite',
	},
};

const dbSettings = {
	client: 'pg',
	connection: dbConnection,
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: './database/migrations',
		tableName: 'vendmeprod_migrations',
	},
	seeds: {
		directory: './database/seeds/production',
	},
};

module.exports = {
	development: dbSqliteDev,
	production: dbSettings,
};
