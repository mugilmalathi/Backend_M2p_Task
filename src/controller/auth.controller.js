const User = require("../model/user.model")
const jwt = require('jsonwebtoken')
require("dotenv").config()

const newToken = (user)=>{
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}

const register = async(req, res)=>{
    try{

        let user = await User.findOne({email: req.body.email}).lean().exec()

        if(user){
            return res.status(400).send({message: "Please try another email"})
        }

        user = await User.create(req.body)

        const token = newToken(user)

        res.status(201).send({ user, token })

    }catch(err){
        res.status(500).send(err.message)
    }
}

const login = async(req, res)=>{

    try{
        const user = await User.findOne({ email: req.body.email });

        if (!user)
        return res.status(400).send({ message: "User not found" });
          
        const match = user.checkPassword(req.body.password);

        if (!match)
        return res.status(400).send({ message: "Please check email or password" });
      
        const token = newToken(user);
        res.status(201).send({ user, token });

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = { register, login }