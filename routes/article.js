/**
 * Created by zhaob on 16/10/30.
 */
var express = require('express');
var router = express.Router();

router.get('/add', function (req, res) {
    res.render('article/add', {title: '发表文章'});
});
module.exports = router;