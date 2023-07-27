const app = require('express')();
const cors = require('cors');

const port = 8080;
app.use(cors());

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


app.get('/sendSMS', (req, res) => {
    Client.messages
  .create({
     body: '7098',
     from: '+12186826963',
     to: '+919319212625'
   })
  .then(message => console.log(message.sid));
  });
  