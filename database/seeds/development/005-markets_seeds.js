const faker = require('faker')

const createFakeMarkets = () => {
  let fakeMarkets = [
    {
      user_market: 1,
      market_name: 'Picapica Plaza',
      address: '910 SE Military Dr',
      lon: 29.35498,
      lat: -98.48484,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78214',
      phone_num: '210-927-7422',
      hours_open: '700,1900;null;700,1900;700,1900;700,1900;700,1900;700,1900',
      market_info:
        'Latin American-style mall boasting salons, fast-food stalls & diverse shops, plus amusement rides.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 2,
      market_name: 'Pan Am Plaza, Inc.',
      address: '1419 Commercial Ave',
      lon: 29.36668,
      lat: -98.51768,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78221',
      phone_num: '210-922-6968',
      hours_open: '900,1800;null;null;900,1800;900,1800;900,1800;900,1800',
      market_info: faker.lorem.paragraph(),
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 3,
      market_name: 'The Mission Market Open Air Market',
      address: '207 W Chavaneaux Rd',
      lon: 29.32069,
      lat: -98.50264,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78221',
      phone_num: '210-923-8131',
      hours_open: '700,1900;null;null;700,1900;null;null;700,1900',
      market_info:
        'Jumbo flea market with 2000+ vendors selling Mexican candy, Western wear, plants, tools & more.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 4,
      market_name: 'The Mission Market Open Air Market #2',
      address: '208 W Chavaneaux Rd',
      lon: 29.32069,
      lat: -98.50264,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78221',
      phone_num: '210-923-8132',
      hours_open: '700,1900;null;null;700,1900;null;null;700,1900',
      market_info:
        'Jumbo flea market with 2001+ vendors selling Mexican candy, Western wear, plants, tools & more.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 5,
      market_name: 'Mi Mercado Flea Market and Ballroom',
      address: '227 New Laredo Hwy',
      lon: 29.37301,
      lat: -98.53875,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78211',
      phone_num: '210-922-7500',
      hours_open: '700,1600;null;null;700,1500;700,1900;700,1500;700,1600',
      market_info:
        'Jumbo flea market with 2000+ vendors selling Mexican candy, Western wear, plants, tools & more.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 6,
      market_name: 'Flea Market',
      address: '115 St Louis Ave',
      lon: 29.43218,
      lat: -98.56354,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78237',
      phone_num: faker.phone.phoneNumberFormat(),
      hours_open: '700,1600;null;null;700,1500;700,1900;700,1500;700,1600',
      market_info:
        'Jumbo flea market with 2000+ vendors selling Mexican candy, Western wear, plants, tools & more.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 7,
      market_name: 'Highway 90 Flea Market/Alamo MarketPlace',
      address: '7171 W US Hwy 90',
      lon: 29.40321,
      lat: -98.63198,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78227',
      phone_num: '210-645-7170',
      hours_open: '1000,1800;null;null;null;null;1100,1800;1000,1800',
      market_info:
        'Huge, air-conditioned locale boasting 100s of vendors offering new & used items, services & food.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 8,
      market_name: 'Blanco Centre Bazaar',
      address: '1705 Blanco Rd',
      lon: 29.46184,
      lat: -98.50808,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78212',
      phone_num: faker.phone.phoneNumberFormat(),
      hours_open: '1000,1800;null;null;null;null;1100,1800;1000,1800',
      market_info:
        'Huge, air-conditioned locale boasting 100s of vendors offering new & used items, services & food.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 9,
      market_name: 'Bandera Flea Market',
      address: '4002, 1331 Bandera Rd',
      lon: 29.46415,
      lat: -98.56605,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78228',
      phone_num: '210-433-2004',
      hours_open: '1000,1900;null;null;null;null;1000,1800;1000,1900',
      market_info:
        'Indoor flea market selling second-hand items & clothing along with with food & live music.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    },
    {
      user_market: 10,
      market_name: 'Pearl Farmers Market',
      address: '312 Pearl Pkwy',
      lon: 29.44212,
      lat: -98.48021,
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78215',
      phone_num: '210-212-7260',
      hours_open: '1000,1400;null;null;null;null;null;900,1300',
      market_info:
        'Indoor flea market selling second-hand items & clothing along with with food & live music.',
      market_map_file: faker.image.image(),
      created_at: Date.parse(
        faker.date.between(
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
          new Date(Date.now() - 1000 * 60 * 60 * 24 * 8)
        )
      )
    }
  ]
  return fakeMarkets
}

exports.seed = function(knex, Promise) {
  return knex('markets')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('markets').insert(createFakeMarkets())
    })
}
