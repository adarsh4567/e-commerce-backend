const e = require('express');
const express = require('express')
const router = express.Router();
const getProducts = require('../controllers/products')
const USER = require("../models/userSchema");



router.get('/getProducts',getProducts);

router.post("./register", async(req, res) => {
    
    const {username, password, email} = req.body;

    if(!username || !password || !email){
        res.status(422).json({error: "fill all the data"});
    }

    try{
        const preuser = await USER.findOne({email: email});

        if(preuser){
            res.status(422).json({error: "This user is already present"})
        }else{
            const finaluser = new USER({
                username, password, email
            });

            const storedata = await finaluser.save();
            res.status(201).json(storedata);
        }


    }catch(error){
    }
});

module.exports =router