const mongoose = require("mongoose")

const userplayground = new mongoose.Schema({
    username: {type:String, default:null},
    firstname: {type: String, default:null},
    lastname:{type: String, default:null},
    password:{type: String, default:null} 
})


module.exports = mongoose.model("userplayground", userplayground)