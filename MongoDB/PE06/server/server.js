connect();
var list =[];

async function connect(){
  const {MongoClient} = require('mongodb');
  const client = new MongoClient('mongodb+srv://student_access:cityucs628@cluster0.swxaj.mongodb.net/sample_restaurants');
  
  await client.connect();
  console.log("Connected to CS628 database");
  const db = client.db();
  find(db)
  return db;
}

async function find(db){
  const query = {
    //complete your query code here
  }
  const cursor = await db.collection('restaurants').find(query);
  
  cursor.forEach(item => {
    list.push({
      //save key value pair into array for query.
      //complete your code here.
    });
  });
}

const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
type Restaurant {
  name: String,
  cuisine: String,
  borough: String
}
type Query {
  restaurants: [Restaurant]
}`;
const resolvers = {
  Query: {
    restaurants: () => list,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });