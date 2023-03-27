require("dotenv").config();
const express = require("express");
const app = express()
const cors = require('cors')
const router = require('./routes/routes');
const Products = require("./models/productsSchema");
const products = require("./constant/productsdata");
require("./db/connection");
const cookieParser = require("cookie-parser");

//middleware
app.use(express.json());
app.use(cookieParser(""));
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
}))
app.use(router)


const port = 8000;

app.listen(port, async() => {
    console.log(`server is running on port number ${port}`)
    // await Products.insertMany(products)

});
