exports.up = function(knex, Promise) {
  return knex.schema.createTable('stalls', function(tbl) {
    //PK
    tbl.increments()
    tbl.string('stall_name')
    // FK
    tbl
      .integer('market_id')
      .references('id')
      .inTable('markets')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    tbl
      .integer('vendor_id')
      .references('id')
      .inTable('vendors')
      .onDelete('CASCADE')

    tbl
      .integer('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')

    tbl.integer('length').notNullable()

    tbl.integer('width').notNullable()

    tbl.boolean('availability')

    tbl.string('description', 500)

    tbl.string('stall_photo', 512)

    tbl.string('contract_expires', 512)

    tbl.decimal('stall_price', 5, 2).notNullable()

    tbl.boolean('rent_message').defaultTo('F')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stalls')
}
