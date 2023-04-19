
const Products = require('../models/productsSchema');
const User = require('../models/userSchema');

const getProducts = async(req,res)=>{
    try {
        const products = await Products.find();
        res.status(201).json(products)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

const addToCart = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Products.findOne({id:id})
        // console.log(product);  got product

        const user = await User.findOne({_id:req.userId})

        // console.log(user);  // got user who added the product

        if(user){
            const cartData = await user.addToCart(product)   // adding product to the cart of user (User Schema)
            await user.save()
            // console.log(cartData);   
            res.status(201).json(user)
        }else{
            res.status(401).json({error:'Invalid user'})
        }
    } catch (error) {
        res.status(401).json({error:'Invalid user'})
    }
}


module.exports = {
    getProducts,
    addToCart
}