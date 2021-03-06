const faker = require('faker')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stalls')
    .del()
    .then(function() {
      // Inserts seed entries
      // return knex('stalls')
      return knex('stalls').insert([
        {
          stall_name: 'A1',
          market_id: 2,
          vendor_id: null,
          category_id: 3,
          length: 189,
          width: 20,
          availability: faker.random.boolean(),
          description: faker.lorem.paragraph(),
          stall_photo: null,
          stall_price: 108.0,
          rent_message: faker.random.boolean()
        },
        {
          stall_name: 'A1',
          market_id: 3,
          vendor_id: null,
          category_id: 2,
          length: 89,
          width: 30,
          availability: faker.random.boolean(),
          description: faker.lorem.paragraph(),
          stall_photo: null,
          stall_price: 59.0,
          rent_message: faker.random.boolean()
        },
        {
          stall_name: 'A1',
          market_id: 1,
          vendor_id: null,
          category_id: 2,
          length: 109,
          width: 120,
          availability: faker.random.boolean(),
          description: faker.lorem.paragraph(),
          stall_photo: null,
          stall_price: 115.0,
          rent_message: faker.random.boolean()
        }
      ])
    })
}
