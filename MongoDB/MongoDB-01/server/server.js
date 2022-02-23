const express = require('express');
require('dotenv').config()
connect();

const app = express();
var list =[];
app.use(express.static('public'));

// app.listen(3000, function () {
//   console.log('App started on port 3000');
// });

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
  // const client = new MongoClient('mongodb+srv://'+process.env.MONGODB_ACCOUNT+':'+process.env.MONGODB_PASSWORD+'@cluster0.swxaj.mongodb.net/sample_airbnb');
  const client = new MongoClient('mongodb+srv://student_access:cityucs628@cluster0.swxaj.mongodb.net/sample_restaurants');
  
  await client.connect();
  console.log("Connected to CS628 database");
  const db = client.db();
  find(db)
  return db;
}

async function find(db){
  const query = {
    price: {$lt : 50}
  }
  const cursor = await db.collection('listingsAndReviews').find(query);
  
  // list = await cursor.map((item)=>list.name)
  cursor.forEach(item => {
    list.push({'name': item.name});
    console.log(list)
  });
}
async function loadData() {
  const response =  await fetch('http://localhost:8000/graphql', {
     method:'POST',
     headers:{'content-type':'application/json'},
     body:JSON.stringify({query:'{resturant}'})
  })
  const rsponseBody =  await response.json();
  return rsponseBody.data.greeting;
}
showData() {
  loadData().then(result => this.setState({greetingMessage:result}))
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

const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
type Hotel {
  name: String
}
type Query {
  hotels: [Hotel]
}`;
const resolvers = {
  Query: {
    hotels: () => list,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });