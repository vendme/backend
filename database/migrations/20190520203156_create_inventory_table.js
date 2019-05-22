exports.up = function(knex, Promise) {
	return knex.schema.createTable('products', function(tbl) {
		// PK
		tbl.increments();

		// Inventory Info
		tbl.string('product_name', 255).notNullable();

		tbl.string('product_description', 500).notNullable();

		tbl.decimal('product_price', 5, 2).notNullable();

		tbl
			.integer('product_category')
			.references('id')
			.inTable('categories')
			.notNullable();
		tbl.binary('product_image', 2048);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('products');
};
