/**
 * Created by zhaob on 16/10/30.
 */
var mongoose = require('mongoose');

mongoose.Promise = Promise;

// 连接数据库
mongoose.connect('mongodb://127.0.0.1/blog');

// 定义 Schema 定义集合字段名称和类型
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
}, {collection: 'user'});

// 定义可操作数据的模型 model
exports.User = mongoose.model('User', UserSchema);