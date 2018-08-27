exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('city_visit', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('trip_id').unsigned().notNull().references('id').inTable('trip');
    table.integer('city_id').unsigned().notNull();
    table.integer('article_id').unsigned().references('id').inTable('article');
    table.text('visit_start_year').notNull();
    table.text('visit_start_month');
    table.text('visit_start_day');
    table.text('visit_end_year').notNull();
    table.text('visit_end_month');
    table.text('visit_end_day');
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('city_visit');
};