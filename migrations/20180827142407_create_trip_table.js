exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('trip', function(table) {
    table.increments('id').unsigned().primary();
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('trip');
};