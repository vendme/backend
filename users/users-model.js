const db = require('../database/dbConfig.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByAccountType,
};

function find() {
	return db('users');
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [id] = await db('users').insert(user);

	return findById(id);
}

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}

function findByAccountType(account_type) {
	return db('users').where({ account_type });
}
