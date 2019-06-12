const faker = require('faker');

const createFakeVendors = () => {
	let fakeVendors = [];
	const desiredFakeVendors = 100;
	for (let i = 0; i < desiredFakeVendors; i++) {
		fakeVendors.push({
			id: i + 1,
			vendor_name: faker.company.companyName(),
			bio: faker.lorem.paragraph(),
			phone_number: faker.phone.phoneNumberFormat(),
			//city: faker.address.city(),
			market_id: 1,
			//products: ,
		});
	}

	return fakeVendors;
};
exports.seed = function(knex, Promise) {
	return knex('vendors')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('vendors').insert(createFakeVendors());
		});
};
