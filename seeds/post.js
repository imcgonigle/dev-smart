exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('posts').insert({ id: 1, title: 'This is a test', content: 'Blah blah blah, something something dark side I am the dark one!!!!', user_id: 1 }),
                knex('posts').insert({ id: 2, title: 'Here is another test post', content: 'The pan pizza is for supperior to any other types of pizza if you have ever tried pan pizza you will with out a doubt agree with me.', user_id: 1 }),
                knex('posts').insert({ id: 3, title: 'A for real Blog Post', content: 'If I had a trillion dollars I would by so much food that I would get fat enough to have my own gravitational pull. Are you jealous that I thougt of that and you didn\'t?', user_id: 1 })
            ]);
        });
};