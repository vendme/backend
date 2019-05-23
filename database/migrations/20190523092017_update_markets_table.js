// Markets table update adding zipcode and phone# columns

exports.up = function(knex) {
	return knex.schema.table('markets', (markets) => {
		markets.string('zip_code', 10).notNullable();
		markets.string('phone_num', 20).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropColumns(['zip_code', 'phone_num']);
};
