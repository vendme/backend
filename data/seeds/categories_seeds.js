const faker = require('faker');
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('categories')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('categories').insert([
				{
					id: 1,
					category_name: 'Antique & Vintage',
					category_desc: faker.lorem.words(),
				},
				{
					id: 2,
					category_name: 'Arts & Crafts',
					category_desc: faker.lorem.words(),
				},
				{
					id: 3,
					category_name: 'Cookware',
					category_desc: faker.lorem.words(),
				},
				{
					id: 4,
					category_name: 'Collectibles',
					category_desc: faker.lorem.words(),
				},
				{
					id: 5,
					category_name: 'Electronics',
					category_desc: faker.lorem.words(),
				},
				{ id: 6, category_name: 'Fashion', category_desc: faker.lorem.words() },
				{
					id: 7,
					category_name: 'Furniture',
					category_desc: faker.lorem.words(),
				},
				{
					id: 8,
					category_name: 'Glassware',
					category_desc: faker.lorem.words(),
				},
				{
					id: 9,
					category_name: 'Memorabilia',
					category_desc: faker.lorem.words(),
				},
				{
					id: 10,
					category_name: 'Sporting Goods',
					category_desc: faker.lorem.words(),
				},
				{
					id: 11,
					category_name: 'Toys & Hobbies',
					category_desc: faker.lorem.words(),
				},
			]);
		});
};
