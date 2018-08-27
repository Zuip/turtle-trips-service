exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('article', function(table) {
    table.increments('id').unsigned().primary();
    table.dateTime('created').notNull().defaultTo(
      knex.raw('now()')
    );
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('article');
};