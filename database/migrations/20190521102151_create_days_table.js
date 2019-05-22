exports.up = function(knex, Promise) {
	return knex.schema.createTable('days', function(tbl) {
		tbl.increments();

		tbl.string('day', 10).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('days');
};
