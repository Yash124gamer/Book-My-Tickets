const mongoose = require('mongoose');
const { Schema } = mongoose;
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
    _id:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        required:true,
    }

  });

  module.exports = mongoose.model('user',UserSchema);