var express = require('express');
var router = express.Router();
var  PostModel = require('./models/post');
var marked = require('marked');

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});

/* GET posts page. */
router.get('/posts', function(req, res, next) {
res.render('posts', { title: 'posts'} );
});

/* GET posts create page. */
router.get('/posts/create', function(req, res, next) {
  res.render('create');
});

/* GET article detail information */
router.get('/posts/show', function(req, res, next){
    var id = req.query.id;
    console.log(id);
    PostModel.findOne({_id: id}, function(err, post){
        post.content = marked(post.content);
        console.log(post);
        res.render('show', {post});
    });
});

// edit page
router.get('/posts/edit', function(req, res, next){
    var id = req.query.id;
    res.render('edit', {id});
});

module.exports = router;
