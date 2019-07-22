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
  fakeUsers.push({
    id: desiredFakeUsers + 1,
    uid: 'GAkYhZmJf9QaUHAwTFQ9ql8NI833',
    email: 'joshuadgon@gmail.com',
    account_type: 1
  })
  fakeUsers.push({
    id: desiredFakeUsers + 2,
    uid: '8H6eZ2wfQ7ajLbnZMtWfF369CIE2',
    email: 'ash4741@gmail.com',
    account_type: 1
  })

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
