const express = require('express')
const Products = require('../models/productsSchema')

const getProducts = async(req,res)=>{
    const products = await Products.find();
    res.status(201).json(products)
}

const getOneProduct = async(req,res)=>{
    const {id} = req.params;
    const data = await Products.findOne({id})
    res.status(201).json(data)
}

module.exports = {getProducts,getOneProduct}