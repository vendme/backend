exports.up = function(knex, Promise) {
  return knex.schema.createTable('vendors', function(tbl) {
    // Primary Key
    tbl.increments()

    // vendor info

    tbl.string('vendor_name', 255).notNullable()

    tbl.string('bio', 500).notNullable()

    tbl.string('phone_number', 15).notNullable()

    tbl.string('vendor_logo', 2048)

    tbl
      .integer('market_id')
      .references('id')
      .inTable('markets')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    // tbl
    // 	.integer('products')
    // 	.references('id')
    // 	.inTable('products')
    // 	.onDelete('CASCADE')
    // 	.onUpdate('CASCADE');

    tbl
      .integer('user_vendor')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vendors')
}
