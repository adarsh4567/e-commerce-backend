const express = require('express')
const products = require('../constant/productsdata')

const getProducts = async(req,res)=>{
    res.status(200).json(products)
}

module.exports = getProducts