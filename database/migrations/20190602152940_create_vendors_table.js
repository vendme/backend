exports.up = function(knex, Promise) {
	return knex.schema.createTable('vendors', function(tbl) {
		// Primary Key
		tbl.increments();

		// vendor info

		tbl.string('vendor_name', 255).notNullable();

		tbl.string('bio', 500).notNullable();

		tbl.string('phone_number', 15).notNullable();

		tbl
			.integer('market_id')
			.references('id')
			.inTable('markets')
			.onDelete('SET NULL')
			.onUpdate('SET NULL');

		tbl
			.integer('products')
			.references('id')
			.inTable('products')
			.onDelete('SET NULL')
			.onUpdate('SET NULL');

		tbl
			.integer('user_vendor')
			.references('id')
			.inTable('users')
			.onDelete('SET NULL')
			.onUpdate('SET NULL');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('vendors');
};
