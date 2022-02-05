const {ApolloServer} = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')

const express = require('express')
const app = express()
const fs = require('fs')
const http = require('http')

//add line 19 to read the schema.graphql file from other file.

let result = "Hello"
//Mutation function 
function changeBooks(_, {bookname}){
    return result = bookname+" Y"
    };
async function startApolloServer(resolvers){
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs: fs.readFileSync('./schema.graphql','utf8'),
        resolvers,
        Plugin: [ApolloServerPluginDrainHttpServer({httpServer})],
    });
    await server.start();
    server.applyMiddleware({app});
    await new Promise(resolve => httpServer.listen(
        {port: 4000},
        resolve    
    ))
    console.log("Server starting")
}
const resolvers = {
    Query: {
        books: () => result,
    },
    Mutation:{
        changeBooks,
    }
};
startApolloServer(resolvers)
