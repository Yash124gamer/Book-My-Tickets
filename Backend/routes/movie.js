const express = require('express')
const router = express.Router();
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

router.get('/',async (req,res)=>{        //The Api endpoint is http://localhost:8080/bmt/getMovieDescription/?name=Pushpa
    await client.connect();
    const db = client.db("BMT");
    const collection = db.collection("Movie_Description");
    const name = req.query.name;  
    const findResult = await collection.find({name:name}).toArray();
    res.send({findResult});
    return 'done.';
})

module.exports = router;