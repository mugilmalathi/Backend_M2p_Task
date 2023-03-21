const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)

const PORT = process.env.PORT || 8080

app.use("/todo", require('./routes/todo.routes'))
app.use("/done-todo", require('./routes/done.routes'))

const { register, login } = require("./controller/auth.controller")

app.post("/register", register)
app.post("/login", login)

app.listen(PORT, ()=>{
    console.log(`DB is Connected to port no ${PORT}`);
})