var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
	// res.render('posts', {title: 'My first web app posts', postList: ['文章1','文章2', '文章3', '文章4']});
	//res.render('posts', {title: 'Posts'});
	next();
});

router.get('/list', function(req, res, next){
	res.json({postList: ['文章1', '文章2', '文章3', '文章4']});
});

module.exports = router;
