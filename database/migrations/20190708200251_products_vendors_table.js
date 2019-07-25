exports.up = function(knex, Promise) {
	return knex.schema.createTable('vendors_products', function(tbl) {
		tbl.increments();

		tbl
			.integer('vendor_id')
			.references('id')
			.inTable('vendors')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl
			.integer('products_id')
			.references('id')
			.inTable('products')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('vendors_products');
};
