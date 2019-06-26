const faker = require('faker');

const createFakeMarkets = () => {
	let fakeMarkets = [];
	const desiredFakeMarkets = 10;
	for (let i = 0; i < desiredFakeMarkets; i++) {
		fakeMarkets.push({
			id: i + 1,
			market_name: faker.company.companyName(),
			address: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.stateAbbr(),
			zip_code: faker.address.zipCode(),
			phone_num: faker.phone.phoneNumberFormat(),
			days_open: faker.date.weekday(),
			hours_of_operation: '9AM - 9PM',
			market_info: faker.lorem.paragraph(),
			market_map_file: faker.image.image(),
		});
	}
	return fakeMarkets;
};

exports.seed = function(knex, Promise) {
	// Added 'e' left off of Promise
	return knex('markets')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('markets').insert(createFakeMarkets());
		});
};
