exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('account_types')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('account_types').insert([
				{ id: 1, accounts: 'market' },
				{ id: 2, accounts: 'vendor' },
				{ id: 3, accounts: 'customer' },
			]);
		});
};
