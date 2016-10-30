/**
 * Created by zhaob on 16/10/30.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// 静态文件中间件
app.use(express.static(path.resolve('public')));

// 解析post方法的body数据，取出请求体，放到req.body上
app.use(bodyParser.urlencoded({extended: true}));

/* 加载模板引擎 start*/
app.set('view engine', 'html');
app.set('views', path.resolve('views'));
app.engine('.html', require('ejs').__express);
/* 加载模板引擎 end*/

var index = require('./routes/index');
var user = require('./routes/user');
var article = require('./routes/article');
app.use('/', index);
app.use('/user', user);
app.use('/article', article);

app.listen(8080);