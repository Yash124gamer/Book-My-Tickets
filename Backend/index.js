const express = require('express')
const app = express()
const connectToMongo = require('./db')
const cors = require('cors');

connectToMongo();
const port = 8080;
app.use(cors());
app.use(express.json())
app.listen(
    port,
    ()=>console.log(`Server Running on ${port}`)
);

//Available API Routes
//API to Handle Data For User
app.use('/bmt/user',require('./routes/user'));
//API To get movie Description from database 
app.use('/bmt/getMovieDiscription',require('./routes/movie'))
//API For Authentication
app.use('/bmt/auth',require('./routes/auth'))

  