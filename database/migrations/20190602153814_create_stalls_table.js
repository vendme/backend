exports.up = function(knex, Promise) {
	return knex.schema.createTable('stalls', function(tbl) {
		//PK
		tbl.increments();

		// FK
		tbl
			.integer('market_id')
			.references('id')
			.inTable('markets')
			.onDelete('CASCADE');

		tbl
			.integer('vendor_id')
			.references('id')
			.inTable('vendors')
			.onDelete('CASCADE');

		tbl
			.integer('category_id')
			.references('id')
			.inTable('categories')
			.onDelete('CASCADE');

		tbl
			.integer('stall_size')
			.references('id')
			.inTable('stall_sizes')
			.onDelete('CASCADE');

		tbl.boolean('availability');

		tbl.string('comments', 500);

		tbl.binary('stall_photo', 2048);

		tbl.decimal('stall_price', 5, 2).notNullable();

		tbl.boolean('rent_message').defaultTo('F');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stalls');
};
