var mongoose = require('mongoose');
const productSchema = require('../../APP_SERVER/models/productItem');
var Products = mongoose.model('product');
getProducts= function(req, res){
    Products.find().exec(function(err, productsData){
        if(err){
            res.status(404).json(err);
            return;
        }else{
            res.status(200).json(productsData);
        }
    });
}

getProduct= function(req, res) {
    let productId = req.params.productId;
    if (productId) {
        Products.findById(productId)
            .exec(function (err, productData) {
                if (!productData) {
                    res.status(404).json({"message": "productId is required"});
                    return;
                } else if (err) {
                    res.status(400).json(err);
                    return;
                }
                res.status(200).json(productData);
            });
    } else {
        res.status(404).json({"message": "no productId in request"});
    }
}

getProductsBasedOnCategory = function(req, res){
    let category = req.params.category;
    //console.log("ccategory is"+category);
        Products.find({category: category}).exec(function(err, productsData){
            if(err){
                res.status(404).json(err);
                return;
            }else{
                res.status(200).json(productsData);
            }
        });
}

updateProductWithUser = function(req, res){
    let productId = req.params.productId;
    if(!productId){
        res.status(404).json({"message":"Not Found, productId is required"});
        return;
    }else {
        Products.findById(productId).exec((err, productData) => {
            if (!productData) {
                res.status(404).json({"message": "productId not found"});
                return;
            } else if (err) {
                res.status(400).json(err);
                return;
            }
            productData.users = req.body.users || productData.users;
            productData.save((err, productData) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(200).json(productData);
                }
            })
        })
    }
}

module.exports = {getProducts, getProduct,
    getProductsBasedOnCategory,
    updateProductWithUser
    };