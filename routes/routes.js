const express = require('express');
const register = require('../controllers/auth');
const router = express.Router();
const getProducts = require('../controllers/products')



router.get('/getProducts',getProducts);

router.post("/register",register);

router.post("/login", login);

module.exports = router