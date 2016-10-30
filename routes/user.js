/**
 * Created by zhaob on 16/10/30.
 */
var express = require('express');
var router = express.Router();

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
        User.create({
            name: reqData.username,
            password: reqData.password,
            email: reqData.email
        })
    }
});
module.exports = router;