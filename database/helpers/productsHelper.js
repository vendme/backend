const db = require('../dbConfig.js')
module.exports = {
  getProducts,
  getProductById,
  getProductsByVendor,
  addProduct,
  editProduct,
  deleteProduct,
  getCategories
}
function getCategories() {
  return db('categories')
}

function getProducts() {
  return db('products')
}

function getProductById(id) {
  return db('products')
    .where({ id })
    .first()
}

function getProductsByVendor(id) {
  return db('products').where({ vendor_id: id })
}

function addProduct(product) {
  return db('products')
    .insert(product)
    .returning(['id', 'product_name'])
}

function editProduct(id, data) {
  return db('products')
    .where({ id })
    .update({ ...data }, ['id'])
}
function deleteProduct(id) {
  return db('products')
    .where({ id })
    .del()
}
