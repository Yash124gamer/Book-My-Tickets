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
    },
    number:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    }

  });

  const User = mongoose.model('user',UserSchema);
  User.createIndexes
  module.exports = User;