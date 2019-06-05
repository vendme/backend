const db = require('../dbConfig.js');
module.exports = {
	getMarkets,
	getMarketById,
	addMarket,
	editMarket,
	deleteMarket,
	getStallsByMarketId,
};
function getStallsByMarketId(market_id) {
	return db('stalls').where({ market_id });
}
function getMarkets() {
	return db('markets');
}

function getMarketById(id) {
	return db('markets')
		.where({ id })
		.first();
}
/* function addMarket(data) {
	return db('markets').insert(data, ['id']);
} */
function addMarket(market) {
	return db('markets')
		.insert(market)
		.returning(['id', 'market_name']);
}

/* function editMarket(id, data, userId) {
	if (userId == id)
		return db('markets')
			.where({ id })
			.update({ ...data }, ['id']);
	else return null;
} */
function editMarket(id, data) {
	return db('markets')
		.where({ id })
		.update({ ...data }, ['id']);
}
function deleteMarket(id) {
	return db('markets')
		.where({ id })
		.del();
}
