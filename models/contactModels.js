const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add name"]
    },
    email:{
        type:String,
        required:[true, "Please add email"]
    }
})

module.exports = mongoose.model("Contact",contactSchema)