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
			days_open: 1,
			hours_of_operation: 1,
			bio: faker.lorem.paragraph(),
			blueprint_file: faker.image.image(),
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
