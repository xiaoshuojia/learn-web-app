var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
	// res.render('index', {title: 'My first web app'});
    res.send({title: "hello world"});

});

module.exports = router;
