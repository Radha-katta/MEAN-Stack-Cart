var mongoose = require('mongoose');
const cartSchema = require('../../APP_SERVER/models/cartItem');
var Carts = mongoose.model('cart');


getCartUser= function(req, res){
    let userId = req.params.userId;
    Carts.find({userId: userId }).exec(function(err, cartData){
        if(err){
            res.status(404).json(err);
            return;
        }else{
            res.status(200).json(cartData[0]);
        }
    });
}
addCartUser = function(req, res){
    let userId = req.params.userId;
   Carts.create({
        userId: userId,
        productList:[{
            productId: req.body._id,
            quantity: 1
        }]
    },(err, cartData)=>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(201).json(cartData);
        }
    });
}

updateCartUser = function(req, res){
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
            cartData.productList = req.body.productList || req.body.cartItem.productList;
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

deleteCartItems = function(req, res){
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
            cartData.productList = [];
            cartData.save((err, cartData) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    console.log("Cart data 2 is"+cartData);
                    res.status(200).json(cartData);
                }
            })

        })
    }
}

module.exports= {getCartUser, addCartUser, updateCartUser, deleteCartItems};