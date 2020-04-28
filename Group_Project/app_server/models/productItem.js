var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    userId:{type: String, required: true},
    qty: {type: String, required: true},
});

var productSchema = new mongoose.Schema({
   // _id:{type: String, required: true},
    name: {type: String, required: false},
    description: {type: String, required: false},
    price: {type: Number, required: false},
    imageUrl : {type: String, required: false},
    category : {type: String, required: false},
   // users: [usersSchema],

});
mongoose.model('product', productSchema, 'Products');