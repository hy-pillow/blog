/**
 * Created by zhaob on 16/10/30.
 */
var express = require('express');
var router = express.Router();
//var User = require('../model/index') 可以不写后面的index.js 默认会找该文件
var User = require('../model').User;

router.get('/signUp', function (req, res) {
    res.render('user/signup', {title: '注册'});
});
router.get('/signIn', function (req, res) {
    res.render('user/signin', {title: '登录'});
});
router.get('/signOut', function (req, res) {
    res.send('退出');
});
router.post('/signUp', function (req, res) {
    var user = req.body;
    if (user && user.username && user.password && user.email) {
        User.create(user).then(function (doc) {
            res.redirect('/');
        }, function (err) {
            res.redirect('back');
        })
    }
});
module.exports = router;