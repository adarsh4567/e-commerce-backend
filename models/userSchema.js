const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email address is not valid")
            }
        }
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    carts: Array
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();
});

//token generation
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, secretKey);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

// addToCart

userSchema.methods.addToCart = async function(cart){
    try {
        this.carts = this.carts.concat(cart)
        await this.save()
        return this.carts
    } catch (error) {
        throw new Error(error)
    }

}

userSchema.methods.removeFromCart = async function(productId){
    try {
        const updatedCart =  this.carts.filter((item)=> item.id !==productId)
        console.log(updatedCart);
        this.carts = updatedCart
        await this.save()
        return this.carts
    } catch (error) {
       throw new Error(error)        
    }
}

const User = new mongoose.model("USER", userSchema);

module.exports = User;