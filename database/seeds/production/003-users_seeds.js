const faker = require('faker')

const createFakeUsers = () => {
  let fakeUsers = []
  const desiredFakeUsers = 10
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push({
      uid: faker.random.uuid(),
      account_type: faker.random.number({ min: 1, max: 3 }),
      email: faker.internet.email(),
      profile_pic:
        'https://res.cloudinary.com/vendme/image/upload/v1563242911/sample.jpg'
    })
  }
  fakeUsers.push({
    uid: 'GAkYhZmJf9QaUHAwTFQ9ql8NI833',
    email: 'joshuadgon@gmail.com',
    account_type: 1,
    profile_pic:
      'https://res.cloudinary.com/vendme/image/upload/v1564282027/qboxrgnocolnly3rkpex.jpg'
  })
  fakeUsers.push({
    uid: '8H6eZ2wfQ7ajLbnZMtWfF369CIE2',
    email: 'ash4741@gmail.com',
    account_type: 1,
    profile_pic:
      'https://res.cloudinary.com/vendme/image/upload/v1563242911/sample.jpg'
  })
  fakeUsers.push({
    uid: 'iy1dU5IxLFbQ0wDPuDpv49gmFto1',
    email: 'ash4748@hotmail.com',
    account_type: 2,
    profile_pic:
      'https://res.cloudinary.com/vendme/image/upload/v1563242911/sample.jpg'
  })
  fakeUsers.push({
    uid: 'rto3et7SD4UNUlBJG2MfpMu73yd2',
    email: 'shrimpcx@gmail.com',
    account_type: 2,
    profile_pic:
      'https://res.cloudinary.com/vendme/image/upload/v1564282027/qboxrgnocolnly3rkpex.jpg'
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
