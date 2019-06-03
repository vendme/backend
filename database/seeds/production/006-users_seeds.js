const faker = require('faker');

const createFakeUsers = () => {
	let fakeUsers = [];
	const desiredFakeUsers = 150;
	for (let i = 0; i < desiredFakeUsers; i++) {
		fakeUsers.push({
			id: i + 1,
			username: faker.internet.userName(),
			password: faker.internet.password(),
			account_type: 1,
			email: faker.internet.email(),
			// user_vendor: faker.lorem.word
			// user_market: faker.lorem.word,
			// user_customer: faker.name.word,
		});

		/* fakeUsers.push({
			id: 2 * i + 2,
			username: faker.internet.userName(),
			password: faker.internet.password(),
			account_type: 2,
			email: faker.internet.email(),
		}); */
	}

	for (let i = 0; i < desiredFakeUsers; i++) {
		fakeUsers.push({
			id: i * 3 + 211,
			username: faker.internet.userName(),
			password: faker.internet.password(),
			account_type: 2,
			email: faker.internet.email(),
			// user_vendor: faker.lorem.word
			// user_market: faker.lorem.word,
			// user_customer: faker.name.word,
		});
	}

	for (let i = 1; i < desiredFakeUsers; i++) {
		fakeUsers.push({
			id: i * 5 + 825,
			username: faker.internet.userName(),
			password: faker.internet.password(),
			account_type: 3,
			email: faker.internet.email(),
			// user_vendor: faker.lorem.word
			// user_market: faker.lorem.word,
			// user_customer: faker.name.word,
		});
	}

	return fakeUsers;
};
exports.seed = function(knex, Promise) {
	return knex('users')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert(createFakeUsers());
		});
};
