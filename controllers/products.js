
const Products = require('../models/productsSchema')

const getProducts = async(req,res)=>{
    const products = await Products.find();
    res.status(201).json(products)
}


module.exports = getProducts