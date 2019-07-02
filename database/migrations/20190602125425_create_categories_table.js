exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(tbl) {
    tbl.increments()

    tbl.string('category_name', 255).notNullable()

    tbl.string('category_desc', 255).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('categories')
}
