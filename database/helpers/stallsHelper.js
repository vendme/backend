const db = require('../dbConfig.js');

module.exports = {
	addStall,
	find,
	findBy,
	findById,
	editStall,
	deleteStall,
	getSizeByVendorId,
};

function find() {
	return db('stalls');
}

function findBy(filter) {
	return db('stalls').where(filter);
}

/* async function add(stall) {
	const [id] = await db('stalls').insert(stall);

	return findById(id);
} */
// Testing addStall function
function addStall(stall) {
	return db('stalls')
		.insert(stall)
		.returning(['id', 'stall_name', 'market_id', 'length', 'width']);
}

function findById(id) {
	return db('stalls')
		.where({ id })
		.first();
}
function editStall(id, data) {
	return db('stalls')
		.where({ id })
		.update({ ...data }, ['id']);
}
function deleteStall(id) {
	return db('stalls')
		.where({ id })
		.del();
}
function getSizeByVendorId(vendor_id) {
	return db('stall_sizes').where({ vendor_id });
}
