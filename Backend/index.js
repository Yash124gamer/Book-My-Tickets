const app = require('express')();
const cors = require('cors');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const accountSid = 'ACca4798b9d2878175188d54ab0a0ed06d';
const authToken = '6cc362aa0ad9f6b384aa869f052bbc6c';
const Client = require('twilio')(accountSid, authToken);

const port = 8080;
const dbName = 'BMT';

app.listen(
    port,
    ()=>console.log(`Server Running on ${port}`)
);

app.get('/',(req,res)=>{
    res.send("This is The API made By me");
})

app.get('/getData:id',(req,res)=>{
    res.send(`Id => ${req.params.id}`);
})

//API To get movie Description from database 
app.get('/getMovieDescription/',cors(),async (req,res)=>{      //The Api endpoint is http://localhost:8080/getMovieDescription/?name=Pushpa
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    const collection = db.collection("Movie_Description");
    const name = req.query.name;

    // the following code examples can be pasted here...
  
    const findResult = await collection.find({name:name}).toArray();
    res.send({findResult});
    return 'done.';
})


app.get('/sendSMS', (req, res) => {
    Client.messages
  .create({
     body: '7098',
     from: '+12186826963',
     to: '+919870732739'
   })
  .then(message => console.log(message.sid));
  });
  