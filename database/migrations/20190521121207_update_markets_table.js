exports.up = function(knex, Promise) {
	return knex.schema.createTable('markets', function(tbl) {
		// PK
		tbl.increments();

		// Markets Info
		tbl.string('market_name', 255).notNullable();

		tbl.string('address', 255).notNullable();

		tbl.string('city', 255).notNullable();

		tbl.string('state', 2).notNullable();

		//FK
		tbl
			.integer('days_open')
			.references('id')
			.inTable('days');

		//FK
		tbl
			.integer('hours_of_operation')
			.references('id')
			.inTable('hours');

		tbl.string('bio', 500).notNullable();

		tbl.binary('blueprint_file', 2048);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('markets');
};
