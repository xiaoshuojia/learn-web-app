var express = require('express');
var router = express.Router();
var path = require('path');
var ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Page' });
	// res.render('index', {title: 'My first web app'});
    // next();
    // res.send({title: "hello world"});
    // res.send("<p>hello world</p>");
    // var html = new ejs({url: '../views/index.ejs'}).render({title: "hello Earth"});
    res.send("html");
});

router.get('/posts', function(req, res, next){
    res.render('posts', {title: 'posts hello'});
});

router.get('/posts/create', function(req, res, next){
    res.render('create', {title: 'Create'});
});



module.exports = router;
