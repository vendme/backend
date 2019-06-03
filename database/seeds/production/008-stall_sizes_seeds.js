exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('stall_sizes')
		.del()
		.then(function() {
			// Inserts seed entries
			/* 
        availableStalls: [
        {
          quantity: 1,
          width: 20,
          length: 189
        },
        {
          quantity: 3,
          width: 30,
          length: 89
        },
        {
          quantity: 5,
          width: 120,
          length: 109
        } 
        */

			return knex('stall_sizes').insert([
				{ id: 1, quantity: 1, width: 20, length: 189 },
				{ id: 2, quantity: 3, width: 30, length: 89 },
				{ id: 3, quantity: 5, width: 120, length: 109 },
			]);
		});
};
