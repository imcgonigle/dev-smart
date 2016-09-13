var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
    res.render('user/new');
});

router.get('/forgot-password', function(req, res, next) {
    res.render('user/forgot-password');
});

router.get('/signin', function(req, res, next) {
    res.render('user/signin');
});

module.exports = router;