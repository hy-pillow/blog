/**
 * Created by zhaob on 16/10/30.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: '首页'});
});
module.exports = router;