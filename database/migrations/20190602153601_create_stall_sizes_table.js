exports.up = function(knex, Promise) {
	return knex.schema.createTable('stall_sizes', function(tbl) {
		tbl.increments();
		tbl.integer('quantity');
		tbl.integer('width');

		tbl.integer('length');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stall_sizes');
};
