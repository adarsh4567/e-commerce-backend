require("dotenv").config();
const express = require("express");
const app = express()
const cors = require('cors')
const router = require('./routes/routes');
const Products = require("./models/productsSchema");
const products = require("./constant/productsdata");
require("./db/connection");
app.use(express.json());
app.use(cors())
app.use(router)


const port = 8000;

app.listen(port, async() => {
    console.log(`server is running on port number ${port}`)
    // await Products.insertMany(products)

});
