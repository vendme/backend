exports.up = function(knex, Promise) {
	return knex.schema.createTable('vendors', function(tbl) {
		// Primary Key
		tbl.increments();

		// vendor info
		tbl.string('bio', 500).notNullable();

		tbl.string('phone_number', 15).notNullable();

		/*  
		tbl
			.int('market_id')
			.references('id')
			.inTable('markets');

		tbl
			.int('products')
			.references('id')
			.inTable('products'); */
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('vendors');
};
