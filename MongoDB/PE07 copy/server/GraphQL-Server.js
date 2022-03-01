const { ApolloServer, gql } = require('apollo-server');
var list =[]
connect();
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
        price: {$lt : 50}
    }
    const cursor = await db.collection('restaurants').find();
    count = 0;
    cursor.forEach(item => {
        if(count > 25){
            return 
        }
        list.push({'name': item.name});
        count++;
    });
}
const typeDefs = gql`
type Resturant {
  name: String
}
type Query {
    resturants: [Resturant]
}`;
const resolvers = {
  Query: {
    resturants: () => list,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });