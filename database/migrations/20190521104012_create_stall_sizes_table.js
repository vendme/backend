exports.up = function(knex, Promise) {
	return knex.schema.createTable('stall_sizes', function(tbl) {
		tbl.increments();

		/* 
		tbl
			.int('stalls_id')
			.references('id')
			.inTable('stalls')
			.notNullable(); */

		tbl.integer('length').notNullable();

		tbl.integer('width').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExist;
};
