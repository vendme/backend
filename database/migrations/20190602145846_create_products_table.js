exports.up = function(knex, Promise) {
	return knex.schema.createTable('products', (tbl) => {
		tbl.increments();

		tbl.string('product_name', 128).notNullable();

		tbl.string('product_description', 500).notNullable();

		tbl.decimal('product_price', [5, 2]).notNullable();

		tbl.string('product_image', 2048);

		tbl
			.integer('product_category')
			.references('id')
			.inTable('categories')
			.onDelete('SET NULL')
			.onUpdate('SET NULL');
	});
};

exports.down = function(knex, Promis) {
	return knex.schema.dropTableIfExists('products');
};
