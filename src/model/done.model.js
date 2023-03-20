const mongoose = require('mongoose')

const doneSchema = new mongoose.Schema({
    id: {
        type: String
    },
    todo:{
        type: String
    },
    pending:{
        type: Boolean
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("doneTodo", doneSchema)