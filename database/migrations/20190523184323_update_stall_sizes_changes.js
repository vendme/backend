exports.up = function(knex, Promise) {
	return knex.schema.table('stall_sizes', function(tbl) {
		tbl.integer('quantity');
		tbl.integer('width');

		tbl.integer('length');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropColumns('increments', 'length', 'width', 'quantity');
};
