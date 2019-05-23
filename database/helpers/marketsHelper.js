const db = require('../dbConfig')
module.exports = {
  getMarkets,
  getMarketById,
  addMarket,
  editMarket,
  deleteMarket
}

function getMarkets() {
  return db ('markets')
}

function getMarketById(id) {
  return db('markets')
    .where({ id })
    .first()
}
function addMarket(data) {
  return db('markets').insert(data, ['id'])
}
function editMarket(id, data, userId) {
  if (userId == id)
    return db('markets')
      .where({ id })
      .update({ ...data }, ['id'])
  else return null
}
function deleteMarket(id) {
  return db('markets')
    .where({ id })
    .del()
}