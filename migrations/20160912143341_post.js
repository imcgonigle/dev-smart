exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table) {
        table.increments().primary();
        table.string('title').notNullable();
        table.integer('user_id').notNullable();
        table.text('content').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};