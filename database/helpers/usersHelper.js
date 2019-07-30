const db = require('../dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByAccountType,
  findByUID,
  addUser,
  editUser,
  deleteUser
}

function find() {
  return db('users')
}

function findBy(filter) {
  return db('users').where(filter)
}

function addUser(user) {
  return db('users')
    .insert(user)
    .returning(['id'])
}

async function add(user) {
  const [id] = await db('users').insert(user, [id])

  return findById(id)
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
}

function findByAccountType(account_type) {
  return db('users').where({ account_type })
}

function findByUID(uid) {
  return db('users')
    .select('id')
    .where({ uid })
    .first()
}

function editUser(id, data) {
  return db('users')
    .where({ id })
    .update({ ...data }, ['id'])
}
function deleteUser(id) {
  return db('users')
    .where({ id })
    .del()
}
