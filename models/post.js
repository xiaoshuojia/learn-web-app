var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    content: String

});

var postModel = mongoose.model('post', postSchema);

module.exports = postModel;
