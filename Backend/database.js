const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "BMT";


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    const collection = db.collection("Movie_Description");
  
    // the following code examples can be pasted here...
  
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
  }
main();