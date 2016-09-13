exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({ id: 1, username: 'ianmcgonigle', first_name: 'Ian', last_name: 'McGonigle', email: 'ian.is.mcgonigle@gmail.com', bio: 'I am Ian I am the ruler of the monkey kingdom and if you don\'t like it you can get out!!!', password_hash: 'afj3li3hf8yph9inkjaf' })
            ]);
        });
};