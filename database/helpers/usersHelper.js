const db = require('../dbConfig.js');

module.exports = {
  add,
  getAllUsers,
  findBy,
  findById,
  findByAccountType,
  addUser,
  editUser,
  deleteUser
};

function getAllUsers() {
  return db('users').select('uid', 'email');
}

function findBy(filter) {
  return db('users').where(filter);
}

function addUser(user) {

	return db('users')
		.insert(user)
    .returning(['id', 'uid', 'email']);
}

async function add(user) {
  const [uid] = await db('users').insert(user);

  return findById(uid);
}

function findById(uid) {
  return db('users')
    .where({ uid })
    .first();
}

function findByAccountType(account_type) {
	return db('users').where({ account_type });
}

function editUser(uid, data) {
	return db('users')
		.where({ uid })
		.update({ ...data }, ['uid']);
}
function deleteUser(uid) {
	return db('users')
		.where({ uid })
		.del();
}
