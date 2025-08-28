// backend/models/userModel.js
const mongoose = require("mongoose");
const UserScheme= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },  
    image:{
        type:String,
    },
});

const UserModel = mongoose.model('social-logins',UserScheme)
module.exports = UserModel;