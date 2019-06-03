exports.up = function(knex) {
	return knex.schema.createTable('users', (tbl) => {
		tbl.increments();

		tbl
			.string('username', 128)
			.notNullable()
			.unique();
		tbl.string('password', 128).notNullable();

		tbl.string('email', 255).notNullable();

		tbl.string('account_type', 128);
		tbl.text('googleID');

		/* tbl
			.integer('user_vendor')
			.references('id')
			.inTable('vendors');

		tbl
			.integer('user_market')
			.references('id')
			.inTable('markets');

		tbl
			.integer('user_customer')
			.references('id')
			.inTable('customers'); */
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
