exports.up = function(knex, Promise) {
	return knex.schema.createTable('account_types', function(tbl) {
		tbl.increments();

		tbl
			.string('accounts', 15)
			.notNullable()
			.unique();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('account_types');
};
