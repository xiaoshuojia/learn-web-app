var express = require('express');   //请求express包

var router = express.Router();

// Get test listing
router.get('/', function(req, res, next){
    // res.send('Hello Test the auto-start 2');
    //res.json(Test);     // if there is no quotation , that in the bracket will be as a vailable , so must be defined
    // res.end("hell end");
    // res.send(79);
    // res.render('test', {title: 'Test it'});
    res.send('hello test');
});

module.exports = router;
