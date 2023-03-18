const User = require('../models/userSchema');


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
}

module.exports = register