const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todo:{
        type: String
    },
    status:{
        type: String,
        default: "All"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("Todo", todoSchema)