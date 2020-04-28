let express = require('express');
let router = express.Router();

let productController= require('../controllers/products');
let userController= require('../controllers/user');
let cartController= require('../controllers/cart');
let orderedController= require('../controllers/orderedItems');

router.get('/userLogin/:userId', userController.getUser);
router.post('/userLogin', userController.addUser);

router.get('/products', productController.getProducts);
router.get('/products/:productId', productController.getProduct);
router.get('/productsCategory/:category', productController.getProductsBasedOnCategory);
router.get('/productsCategory', productController.getProducts);

router.get('/carts/:userId', cartController.getCartUser);
router.post('/carts/:userId', cartController.addCartUser);
router.put('/carts/:userId', cartController.updateCartUser);
router.put('/carts/delete/:userId', cartController.deleteCartItems);

router.put('/ordered/update/:userId', orderedController.updateOrderedItems);

module.exports = router;
