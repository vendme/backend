const db = require('../dbConfig.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByAccountType,
};

function find() {
	return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
	return db('users').where(filter);
}

function add(user) {
	//const [id] =
	return db('users')
		.insert(user)
		.returning(['id']);

	//return findById(id);
}

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}
function findByAccountType(account_type) {
	return db('users').where({ account_type });
}
