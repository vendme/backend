const db = require('../dbConfig.js');
module.exports = {
	getVendorsProducts,
};

function getVendorsProducts() {
	return db('vendors_products');
}
