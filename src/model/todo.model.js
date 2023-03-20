const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    id: {
        type: String
    },
    todo:{
        type: String
    },
    pending:{
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("Todo", todoSchema)