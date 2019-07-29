exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', tbl => {
    tbl.increments()

    tbl
      .integer('market_id')
      .references('id')
      .inTable('markets')
      .onDelete('CASCADE')

    tbl
      .integer('vendor_id')
      .references('id')
      .inTable('vendors')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.string('product_name', 128).notNullable()

    tbl.string('product_description', 500).notNullable()

    tbl.decimal('product_price', [5, 2]).notNullable()

    tbl.string('product_image', 2048)

    tbl
      .integer('product_category')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products')
}
