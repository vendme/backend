exports.up = function(knex, Promise) {
	return knex.schema.table('categories', (tbl) => {
		tbl.string('category_desc', 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropColumn('category_desc');
};
