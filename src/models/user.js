const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        requerid:true
    }
})

module.exports = mongoose.model('User',userSchema);