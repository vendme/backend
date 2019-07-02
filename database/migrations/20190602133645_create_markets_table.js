exports.up = function(knex, Promise) {
  return knex.schema.createTable('markets', function(tbl) {
    // PK
    tbl.increments()

    // Markets Info
    tbl.string('market_name', 500).notNullable()

    tbl.string('address', 255).notNullable()

    tbl.string('city', 255).notNullable()

    tbl.string('state', 2).notNullable()

    tbl.string('zip_code', 10).notNullable()

    tbl.string('phone_num', 20).notNullable()

    tbl.string('market_info', 1000).notNullable()

    tbl.string('hours_open', 70)

    tbl.string('market_map_file', 2048)

    tbl.string('agreement_file', 2048)

    tbl.bigInteger('created_at').notNullable()

    tbl
      .integer('user_market')
      .references('id')
      .inTable('users')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('markets')
}
