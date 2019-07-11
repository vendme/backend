exports.up = function(knex, Promise) {
	return knex.schema.createTable('markets_stalls', function(tbl) {
		tbl.increments();

		tbl
			.integer('market_id')
			.references('id')
			.inTable('markets')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl
			.integer('stalls_id')
			.references('id')
			.inTable('stalls')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('markets_stalls');
};
