const express = require('express');
const {register,login} = require('../controllers/auth');
const router = express.Router();
const {getProducts,addToCart} = require('../controllers/products');
const auth = require('../middleware/auth');


router.get('/getProducts',getProducts);

router.post("/register",register);

router.post("/login", login);

router.post('/cart/:id',auth,addToCart)

module.exports = router