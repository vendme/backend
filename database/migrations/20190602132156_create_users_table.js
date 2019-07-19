exports.up = function(knex) {
	return knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.string('uid', 255).notNullable();
		tbl.string('email', 255).notNullable();
		tbl.integer('account_type');
		tbl.string('profile_pic', 2048);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
