const User = require('../models/userSchema');
const router = require('../routes/routes');
const bcrypt = require("bcryptjs");


const register =  async(req, res) => {
    
    const {username, password, email} = req.body;

    if(!username || !password || !email){
        res.status(422).json({error: "fill all the data"});
    }

    try{
        const preUser = await User.findOne({email: email});

        if(preUser){
            res.status(422).json({error: "This user is already present"})
        }else{
            const finalUser = new User({
                username, password, email
            });

            const storeData = await finalUser.save();
            res.status(201).json(storeData);
        }


    }catch(error){
        res.status(401).json({message:error})
    }
};

 const login =  async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400).json({error: "Fill all the data"})
    }

    try {
        const userLogin = await User.findOne({email : email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            console.log(isMatch);

            if(!isMatch){
                res.status(400).json({error : "invalid details"})
            }else{
                res.status(201).json({message : "password match"})
            }
        }
    } catch (error) {
        res.status(400).json({error : "invalid details"})
    }
};

module.exports = {register, login}