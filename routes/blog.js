var express = require('express');
var router = express.Router();
var query = require('../database/blog/query')

router.get('/', function(req, res, next) {
    query.getAllPosts()
        .then(function(data) {
            res.render('blog/index', { data: data });
        })
        .catch(function(err) {
            return next(err);
        })
});

router.get('/:post_id', function(req, res, next) {
    query.getPostByID(req.params.post_id)
        .then(function(data) {
            res.render('blog/post', { data: data[0] });
        })
        .catch(function(err) {
            return next(err);
        })
});

router.get('/new', function(req, res, next) {
    res.render('blog/new');
});

module.exports = router;