exports.up = function(knex, Promise) {
	return knex.schema.table('stall_sizes', function(tbl) {
		tbl
			.integer('vendor_id')
			.references('id')
			.inTable('vendors')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('stall_sizes', function(tbl) {
		return table.dropColumn('vendor_id');
	});
};
