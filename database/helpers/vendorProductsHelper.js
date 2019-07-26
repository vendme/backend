const db = require('../dbConfig.js');
module.exports = {
	getVendorsProducts,
	getProductById,
};

function getVendorsProducts() {
	return db('vendors_products');
}

function getProductById(vendor_id) {
	return db('vendor_products')
		.where({ vendor_id })
		.returning({ ...data }, ['vendor_id'])
		.first();
}
