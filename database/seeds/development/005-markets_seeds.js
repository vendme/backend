const faker = require('faker');

const createFakeMarkets = () => {
	let fakeMarkets = [];
	const desiredFakeMarkets = 100;
	for (let i = 0; i < desiredFakeMarkets; i++) {
		fakeMarkets.push({
			id: i + 1,
			market_name: faker.company.companyName(),
			address: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.stateAbbr(),
			zip_code: faker.address.zipCode(),
			phone_num: faker.phone.phoneNumberFormat(),
			date_open: faker.date.weekday(),
			hours_open: '9AM - 8PM',
			market_info: faker.lorem.paragraph(),
			market_map_file: faker.image.image(),
			created_at: Date.parse(
				faker.date.between(
					new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
					new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
				)
			),
		});
	}
	return fakeMarkets;
};

exports.seed = function(knex, Promis) {
	return knex('markets')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('markets').insert(createFakeMarkets());
		});
};
