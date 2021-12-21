const express = require('express');
require('dotenv').config()
connect();
const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App started on port 3000');
});

async function connect(){
  const {MongoClient} = require('mongodb');
  const client = new MongoClient('mongodb+srv://'+process.env.MONGODB_ACCOUNT+':'+process.env.MONGODB_PASSWORD+'@cluster0.swxaj.mongodb.net/sample_airbnb');
  await client.connect();  
  console.log("Connected to CS628 database");
  const db = client.db();
  find(db);
  return db;
}

async function find(db){
  const cursor = await db.collection('listingsAndReviews').find({price: {$gt :500}}).toArray();
  cursor.forEach((list)=>{
    console.log(list["price"]);
  })
}