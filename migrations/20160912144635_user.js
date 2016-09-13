exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('password_hash').notNullable();
        table.string('first_name', 100).notNullable();
        table.string('last_name', 100).notNullable();
        table.string('email').notNullable();
        table.text('bio');
        table.timestamp('created_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};