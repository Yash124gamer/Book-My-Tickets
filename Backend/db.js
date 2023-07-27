const mongoose = require('mongoose');
const connectToMongo = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/BMT');
    console.log('Connected successfully to server');
}

module.exports = connectToMongo;

