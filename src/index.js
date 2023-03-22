const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config()
const User = require("./model/user.model")

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)

const PORT = process.env.PORT || 8080

app.use("/todo", require('./routes/todo.routes'))

const { register, login } = require("./controller/auth.controller")

app.post("/register", register)
app.get("/register", async(req, res)=>{
    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err)
    }
})
app.post("/login", login)

app.get("/login", async(req, res)=>{
    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err)
    }
})

app.listen(PORT, ()=>{
    console.log(`DB is Connected to port no ${PORT}`);
})