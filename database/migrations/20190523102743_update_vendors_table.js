exports.up = function(knex, Promise) {
	return knex.schema.table('vendors', function(tbl) {
		tbl
			.integer('market_id')
			.references('id')
			.inTable('markets');

		tbl
			.integer('products')
			.references('id')
			.inTable('products');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropColumns('market_id', 'products');
};
