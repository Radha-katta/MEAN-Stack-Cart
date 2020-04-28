var mongoose = require('mongoose');
const cartSchema = require('../../APP_SERVER/models/cartItem');
var Carts = mongoose.model('cart');

updateOrderedItems = function(req, res){
    let user_id = req.params.userId;
    if(!user_id){
        res.status(404).json({"message":"Not Found, userId is required"});
        return;
    }else {
        Carts.find({userId: user_id}).exec((err, cartData) => {
            cartData = cartData[0];

            if (!cartData) {
                res.status(404).json({"message": "userID not found"});
                return;
            } else if (err) {
                res.status(400).json(err);
                return;
            }
           cartData.productList = req.body.productList ;
           cartData.orderedProductsList = req.body.orderedProductsList ;
            cartData.save((err, cartData) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(200).json(cartData);
                }
            })

        })
    }
}



module.exports= { updateOrderedItems};