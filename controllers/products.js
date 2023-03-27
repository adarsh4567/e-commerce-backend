
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
        const cart = Products.findOne({id:id})
        console.log(cart);

        const user = User.findOne({_id:req.userId})

        console.log(user);

        if(user){
            const cartData = await user.addToCart(cart)
            await user.save()
            console.log(cartData);
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