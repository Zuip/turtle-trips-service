exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('trip_user', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('trip_id').unsigned().notNull().references('id').inTable('trip');
    table.integer('user_id').unsigned().notNull();
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('trip_user');
};
