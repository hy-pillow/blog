/**
 * Created by zhaob on 16/10/30.
 */
var express = require('express');
var app = express();

/**
 * / 首页
 * /user/signUp 注册
 * /user/signIn 登录
 * /user/signOut 退出
 *
 * /article/add 发表文章
 */
var index = require('./routes/index');
var user = require('./routes/user');
var article = require('./routes/article');
app.use('/', index);
app.use('/user', user);
app.use('/article', article);

app.listen(8080);