const express = require('express');
const {register,login} = require('../controllers/auth');
const router = express.Router();
const {getProducts,addToCart, removeProduct} = require('../controllers/products');
const auth = require('../middleware/auth');


router.get('/getProducts',getProducts);

router.post("/register",register);

router.post("/login", login);

router.post('/cart/:id',auth,addToCart)

router.post('/cart/delete/:id',auth,removeProduct)

module.exports = router