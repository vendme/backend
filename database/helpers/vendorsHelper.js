const db = require('../../dbConfig')
module.exports = {
  getVendors,
  getVendorById,
  addVendor,
  editVendor,
  deleteVendor
}

function getVendors() {
  return db('vendors')
}

function getVendorById() {
  return db ('vendors')
    .where({ id })
    .first()
}
function addVendor(data, userId) {
  return db('vendors').insert({...data, market_id:userId}, ['id'])
}
function editVendor(id, data, userId) {
  const vendor = await getVendorById(id)
  if (vendor.market_id == userId)
    return db('markets')
      .where({ id })
      .update({ ...data }, ['id'])
  else return null
}
function deleteVendor(id) {
  const vendor = await getVendorById(id)
  if (vendor.market_id == userId){
  return db('vandors')
    .where({ id })
    .first()
    .del()
}else return null
}