exports.up = function(knex, Promise) {
	return knex.schema.createTable('categories', function(tbl) {
		tbl.increments();

		tbl.string('category_name', 500).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('categories');
};
