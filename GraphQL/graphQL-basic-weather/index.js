const { ApolloServer, gql } = require('apollo-server');
const cities = [
    {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      temp: 0,
    },
    {
      name: "Seattle",
      region: "WA",
      country: "United States",
      lat: 51.52,
      lon: -0.11,
      temp: 32,
    },
    {
      name: "Los Angeles",
      region: "CA",
      country: "United States",
      lat: 45.2,
      lon: 22.1,
      temp: 70,
    },
  ];

  const typeDefs = gql`
  type City {
    name: String
    temp: Int
  }
  type Query {
    tempature: [City]
  }
  type Mutation {
    setWeather(city: String!, temp: String!): String
  }`;
  const resolvers = {
    Query: {
      tempature: () => cities,
    },
    Mutation: {
      setWeather,
    }
  };

  function setWeather(_,{city, temp}){
    console.log(temp)
    const res = { name: city,
                  temp: temp}
    return city+":"+temp;
  }
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });