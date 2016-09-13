var express = require('express');
var router = express.Router();

var siteInfo = {
    title: 'DevSmart.Design'
}


router.get('/', function(req, res, next) {
    res.render('blog/index', siteInfo);
});

router.get('/about', function(req, res, next) {
    res.render('static/about', siteInfo);
});


router.get('/contact', function(req, res, next) {
    res.render('static/contact', siteInfo);
});

router.get('/license', function(req, res, next) {
    res.render('static/license', siteInfo);
});

router.get('/subscribe', function(req, res, next) {
    res.render('static/subscribe', siteInfo);
});



module.exports = router;