// var postModel = require('./models/post');
// var express = require('express');
// var router = express.Router();
//
// router.post('/posts/create', function(req, res, next){
//     var title = req.body.title;
//     var content = req.body.content;
//     var post = new postModel();
//     post.title = title;
//     post.content = content;
//     // Sava the data into DB
//     post.save (function(err, doc){
//         res.json({success: true});
//     });
// });
//
//
//
// /* GET API . */
// router.get('/users', function(req, res, next) {
//     res.send('respond a resource');
// });
//
// // GET post list
// router.get('/posts', function(req, res, next){
//     postModel.find({}, {}, function(err, posts){
//         if (err){
//             res.json({success: false});
//         }
//         else {
//             res.json({success: true, postList: posts});
//         }
//     });
// });
//
//
//
// module.exports = router;

var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET users lists. */
router.get('/users', function(req, res, next) {
res.send('respond with a resource');
});

/* GET posts lists */
router.get('/posts', function (req, res, next) {
  PostModel.find({}, {}, function (err, posts) {
    //   console.log(PostModel);
    if (err) {
      res.json({ success: false });
    } else {
        console.log('posts = ' + posts);
      res.json({ success: true, postsList: posts });
    }
  });
});

/* POST posts */
router.post('/posts/create', function (req, res, next) {
  var title = req.body.title;
  var content = req.body.content;

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function (err) {
    if (err) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
});

// get the special article
router.get('/posts/one', function(req, res, next){
    var id = req.query.id;
    PostModel.findOne({_id: id}, function(err, post){
        if (err){
            res.json({success: false});
            return;
        }
        res.json({success: true, post});
    });
});


// update the special article to the DB
router.post('/posts/edit', function(req, res, next){
    var id = req.body.id;
    var content = req.body.content;
    var title = req.body.title;
    console.log('id:'+ id );
    console.log('title: ' + title);

    postModel.findOneAndUpdate({_id: id}, {title, content}, function(err){
        if(err){
            res.json({success: false});
        }
        else {
            res.json({success: true});
        }
    });
});

// router.get('/posts/one/', funciotn(req, res, next){
//   var id = req.query.id;
//   postModel.findOne({_id: id}, function(err, post){
//     if (err){
//       res.json({success: false});
//       return;
//     }
//     res.json({success: true, post});
//   });
// });


module.exports = router;
