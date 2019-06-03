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
					vendor_id: 1,
					category_id: 3,
					stall_size: 3,
					availability: faker.random.boolean(),
					comments: faker.lorem.paragraph(),
					stall_photo: faker.image.image(),
					stall_price: 108.0,
					rent_message: faker.random.boolean(),
				},
				{
					id: 2,
					market_id: 3,
					vendor_id: 5,
					category_id: 2,
					stall_size: 1,
					availability: faker.random.boolean(),
					comments: faker.lorem.paragraph(),
					stall_photo: faker.image.image(),
					stall_price: 59.0,
					rent_message: faker.random.boolean(),
				},
				{
					id: 3,
					market_id: 70,
					vendor_id: 12,
					category_id: 2,
					stall_size: 1,
					availability: faker.random.boolean(),
					comments: faker.lorem.paragraph(),
					stall_photo: faker.image.image(),
					stall_price: 115.0,
					rent_message: faker.random.boolean(),
				},
			]);
		});
};
