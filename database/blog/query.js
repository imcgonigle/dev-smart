var knex = require('../knex');

function Posts() {
    return knex('posts').join('users', 'user_id', 'users.id');
};


module.exports = {
    getAllPosts: Posts,
    getPostByID: function(id) {
        return Posts().where('posts.id', id);
    }
};