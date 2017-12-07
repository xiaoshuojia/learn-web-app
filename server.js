require('./models/init.js');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

// var index = require('./routes/index');
// var users = require('./routes/users');
// var test = require('./routes/test');
// var posts = require('./routes/posts');


// 分开处理 数据和页面两种类型的路由
// var page = require('./routes/page');
// var api  = require('./routes/api');

// 路由的处理模块位置发生变化
var page = require('./route.page.js');
var api = require('./route.api.js');

var app = express();
// console.log(express.env.PORT);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);    //使用页面布局模块
// view的代码不是必需的，可以自己做出网页来，不必非要使用express的


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 以上这些都是中间件，用来分析数据，整理数据

// app.use('/', index);
// app.use('/users', users);
// // app.use('/test', function(req, res, next){
// //     var err = new Error("Not Found");
// //     err.status = 500;
// //     //next(err);
// //     res.json( 'response you ');
// // });
// app.use('/test', test);
//
// app.use('/posts', posts);


// 分别进入不同的路由界面
app.use('/', page);
app.use('/api', api);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000);

module.exports = app;
