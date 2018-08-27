exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('translated_article', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('article_id').unsigned().notNull().references('id').inTable('article');
    table.text('language').notNull();
    table.text('summary').notNull();
    table.text('text').notNull();
    table.boolean('published').notNull().defaultTo(false);
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('translated_article');
};