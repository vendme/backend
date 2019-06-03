exports.up = function(knex, Promise) {
	return knex.schema.createTable('customers', function(tbl) {
		tbl.increments();

		tbl.string('first_name', 255).notNullable();

		tbl.string('last_name', 255).notNullable();

		tbl.string('email', 500).notNullable();
		tbl.string('phone_num', 20).notNullable();

		tbl
			.integer('user_customer')
			.references('id')
			.inTable('users');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('customers');
};
