var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId : {type: String, required: true},
    password : {type: String, required: true}
});
mongoose.model('user', userSchema, 'Users');