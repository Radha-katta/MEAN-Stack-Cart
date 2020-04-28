let express = require('express');

let router = express.Router();
const homeController = require('../../app_server/controllers/home');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/home', homeController.productsList);
module.exports = router;
