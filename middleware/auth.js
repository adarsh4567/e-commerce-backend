const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const secretKey = process.env.KEY


const auth = async(req,res,next)=>{
     try {
       const token = req.cookies?.token
       const verifyToken = jwt.verify(token,secretKey)
       console.log(verifyToken);
       
       const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

       console.log(rootUser);

       if(!rootUser) throw new Error('user not found')
       
       req.token = token
       req.rootUser = rootUser
       req.userId = rootUser._id

       next()


     } catch (error) {
        res.status(401).json({message:"Unauthorized Error"})
     }
}


module.exports = auth




