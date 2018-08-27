exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('translated_trip', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('trip_id').unsigned().notNull().references('id').inTable('trip');
    table.text('language').notNull();
    table.text('name').notNull();
    table.text('url_name').notNull();
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('translated_trip');
};