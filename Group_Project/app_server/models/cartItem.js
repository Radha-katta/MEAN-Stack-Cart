let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    productId: {type: String, required: true},
    quantity: {type: String, required: true},
});
let cartSchema = new mongoose.Schema({
    userId : {type: String, required: true},
   productList: [productSchema],
    orderedProductsList: [productSchema]
});
mongoose.model('cart', cartSchema, 'Carts');