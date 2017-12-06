var express = require('express');
var router = express.Router();

/* GET API . */
router.get('/users', function(req, res, next) {
    res.send('respond a resource');
});

router.get('/posts', function(req, res, next){
    res.json({postsList: ['文章1', '文章2', '文章3']});
});

// posts post
router.post('/posts/create', function(req, res, next){
    var title = req.body.title;
    var content = req.body.content;
    res.send({title, content});
});

module.exports = router;
