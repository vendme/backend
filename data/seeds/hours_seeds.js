exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('hours')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('hours').insert([
				{ id: 1, hours: '12:00' },
				{ id: 2, hours: '01:00' },
				{ id: 3, hours: '02:00' },
				{ id: 4, hours: '03:00' },
				{ id: 5, hours: '04:00' },
				{ id: 6, hours: '04:00' },
				{ id: 7, hours: '05:00' },
				{ id: 8, hours: '06:00' },
				{ id: 9, hours: '07:00' },
				{ id: 10, hours: '08:00' },
				{ id: 11, hours: '09:00' },
				{ id: 12, hours: '10:00' },
				{ id: 13, hours: '11:00' },
			]);
		});
};
