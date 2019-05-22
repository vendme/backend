exports.up = function(knex) {
	return knex.schema.table('users', (users) => {
		users.string('email', 255).notNullable();
		users
			.integer('user_vendor')
			.references('id')
			.inTable('vendors');

		users
			.integer('user_market')
			.references('id')
			.inTable('markets');

		users
			.integer('user_customer')
			.references('id')
			.inTable('customers');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropColumns([
		'email',
		'user_vendor',
		'user_market',
		'user_customer',
	]);
};
