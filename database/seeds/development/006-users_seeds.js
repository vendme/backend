const faker = require('faker')

const createFakeUsers = () => {
  let fakeUsers = []
  const desiredFakeUsers = 10
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push({
      id: i + 1,
      uid: faker.random.uuid(),
      account_type: faker.random.number({ min: 1, max: 3 }),
      email: faker.internet.email()
    })
  }

  return fakeUsers
}
exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(createFakeUsers())
    })
}
