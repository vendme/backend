exports.up = function(knex, Promise) {
	return knex.schema.createTable('stall_sizes', function(tbl) {
		tbl.increments();

		tbl.integer('quantity');
		tbl.integer('width');

		tbl.integer('length');

		tbl
			.integer('vendor_id')
			.references('id')
			.inTable('vendors')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stall_sizes');
};
