require('dotenv').config();

const express = require('express')
const app = express();

const port = 8000;

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})