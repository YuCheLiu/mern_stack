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
  const cursor = await db.collection('restaurants').find();
  count =0
  cursor.forEach(item => {
    if(count == 20)break;
    list.push({
      name: item.name
    });
    count++;
  });
}

const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
type Restaurant {
  name: String
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