const express = require('express')
const router = express.Router();
const Products = require('../models/productsSchema')
const getProducts = require('../controllers/products')



router.get('/getProducts',getProducts)


module.exports =router