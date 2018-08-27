exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('city_visit_user', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('city_visit_id').unsigned().notNull().references('id').inTable('city_visit');
    table.integer('user_id').unsigned().notNull();
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('city_visit_user');
};