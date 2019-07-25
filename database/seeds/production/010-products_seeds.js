const faker = require('faker');

const createFakeProducts = () => {
	let fakeProducts = [];
	const desiredFakeProducts = 10;
	for (let i = 0; i < desiredFakeProducts; i++) {
		fakeProducts.push({
			//id: i + 1,
			market_id: faker.random.number({ min: 1, max: 10 }),
			//vendor_id: faker.random.number({ min: 1, max: 10 }),
			product_name: faker.commerce.productName(),
			product_description: faker.lorem.words(),
			product_price: faker.commerce.price(),
			product_category: faker.random.number({ min: 1, max: 10 }),
			product_image: faker.image.image(),
		});
	}
	return fakeProducts;
};

exports.seed = function(knex, Promise) {
	return knex('products')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('products').insert(createFakeProducts());
		});
};
