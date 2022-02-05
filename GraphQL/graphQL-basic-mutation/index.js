const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')

const app = express()
const http = require('http');

const httpServer = http.createServer(app);

let result = "books"
//Mutation function 
function changeBooks(_, {bookname}){
return result = bookname+" Yio"
};
//schema
const typeDefs = gql`
type Query {
books: String
}
type Mutation{
    changeBooks(bookname:String):String
}
`
//resolvers
const resolvers = {
Query: {
    books: () => result,
},
Mutation:{
    changeBooks,
}
};
async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers)