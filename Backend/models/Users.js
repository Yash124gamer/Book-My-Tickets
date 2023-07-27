const mongoose = require('mongoose');

const UserSchema = new Schema({
    
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },

  });

  module.exports = mongoose.model('user',UserSchema);