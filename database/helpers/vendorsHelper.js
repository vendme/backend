const db = require('../dbConfig.js');
module.exports = {
	getVendors,
	getVendorById,
	addVendor,
	editVendor,
	deleteVendor,
	getStallsByVendorId,
};

function getVendors() {
	return db('vendors');
}

function getVendorById(id) {
	return db('vendors')
		.where({ id })
		.first();
}

function addVendor(vendor) {
	return db('vendors')
		.insert(vendor)
		.returning([
			'id',
			'vendor_name',
			'bio',
			'phone_number',
			'market_id',
			'products',
		]);
}

function editVendor(id, data) {
	return db('vendors')
		.where({ id })
		.update({ ...data }, ['id']);
}
function deleteVendor(id) {
	return db('vendors')
		.where({ id })
		.del();
}
function getStallsByVendorId(vendor_id) {
	return db('stalls').where({ vendor_id });
}
