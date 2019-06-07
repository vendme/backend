const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByAccountType,
  addUser,
  editUser,
  deleteUser
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function addUser(user) {
	return db('users')
		.insert(user)
    .returning(['id', 'username']);
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


function editUser(id, data) {
	return db('users')
		.where({ id })
		.update({ ...data }, ['id']);
}
function deleteUser(id) {
	return db('users')
		.where({ id })
		.del();
}