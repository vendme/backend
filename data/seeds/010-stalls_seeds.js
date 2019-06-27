const faker = require('faker');
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('stalls')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('stalls').insert([
				{
					id: 1,
					market_id: 2,
					category_id: 3,
					quantity: 3,
					length: 189,
					width: 20,
					availability: faker.random.boolean(),
					comments: faker.lorem.paragraph(),
					stall_photo: faker.image.image(),
					stall_price: 108.0,
					rent_message: faker.random.boolean(),
				},
				{
					id: 2,
					market_id: 3,
					category_id: 2,
					quantity: 1,
					length: 89,
					width: 30,
					availability: faker.random.boolean(),
					comments: faker.lorem.paragraph(),
					stall_photo: faker.image.image(),
					stall_price: 59.0,
					rent_message: faker.random.boolean(),
				},
				{
					id: 3,
					market_id: 70,
					category_id: 2,
					quantity: 1,
					length: 109,
					width: 120,
					availability: faker.random.boolean(),
					comments: faker.lorem.paragraph(),
					stall_photo: faker.image.image(),
					stall_price: 115.0,
					rent_message: faker.random.boolean(),
				},
			]);
		});
};
