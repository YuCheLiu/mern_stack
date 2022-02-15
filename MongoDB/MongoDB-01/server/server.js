const express = require('express');
require('dotenv').config()
connect();

const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App started on port 3000');
});

// async function test(){
//   await console.log("Hello this is me");
// }
// var promise = new Promise(function(resolve, reject) {
//   const x = "12";
//   const y = "13"
//   if(x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// promise.
//     then(function () {
//         console.log('1. Success, 12 = 12');
//     }).
//     catch(function () {
//         console.log('2. Some error has occurred');
//     });
// console.log("3. Some result shows here.");

// async function test(){
//     console.log("1. inside test function")
//     return "Hello World";
// }

// test().
//   then(result =>{
//     console.log("2. "+result);
//   })
//   .catch(e => {
//     console.log("3. error");
//   });


async function connect(){
  const {MongoClient} = require('mongodb');
  const client = new MongoClient('mongodb+srv://'+process.env.MONGODB_ACCOUNT+':'+process.env.MONGODB_PASSWORD+'@cluster0.swxaj.mongodb.net/sample_airbnb');
  await client.connect();
  console.log("Connected to CS628 database");
  const db = client.db();
  find(db)
  return db;
}

async function find(db){
  const query = {
    price: {$lt : 10}
  }
  const cursor = await db.collection('listingsAndReviews').find(query);
  
  let result = await cursor.map((list)=>list.name)
  result.forEach(item => console.log(item));
}

async function findOne(db){
  const cursor = await db.collection('listingsAndReviews').findOne({price: {$gt :1000}});
 
  console.log(cursor);
}

async function findAggreate(db){
  const pipeline = [
    {
      '$match': {
        'price': 1000
      }
    },
    {
      '$project': {
        'name': 1,
        'price':1,
        'accommodates':1
      }
    }
  ]
  const cursor = await db.collection('listingsAndReviews').aggregate(pipeline).toArray();
  cursor.map( (list) => {console.log(list)})
}