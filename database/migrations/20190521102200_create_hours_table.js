exports.up = function(knex, Promise) {
	return knex.schema.createTable('hours', function(tbl) {
		tbl.increments();

		tbl.time('hours', { precision: 4 }).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('hours');
};
