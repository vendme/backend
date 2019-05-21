const db = require('../../dbConfig')
module.exports = {
  getMarkets,
  getMarketById,
  addMarket,
  editMarket,
  deleteMarket
}

function getMarkets() {
  return db
    .select(
      'id',
      'market_name',
      'address',
      'city',
      'state',
      'zip_code',
      'phone_num',
      'days_of_week',
      'hours_of_op',
      'bio',
      'blueprint_file'
    )
    .from('markets')
}

function getMarketById() {
  return db
    .select(
      'id',
      'market_name',
      'address',
      'city',
      'state',
      'zip_code',
      'phone_num',
      'days_of_week',
      'hours_of_op',
      'bio',
      'blueprint_file'
    )
    .from('markets')
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