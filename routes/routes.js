const express = require('express')
const router = express.Router();
const Products = require('../models/productsSchema')
const {getProducts,getOneProduct} = require('../controllers/products')



router.get('/getProducts',getProducts)
router.get('/product/:id',getOneProduct)


module.exports =router