import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { User } from "./interfaces/user.interface";

//Tipo Query 
const typeDefs = `#graphql
  type User {
    name:String,
    email:String

  }

  type Query {
    users: [User]  
  }
`;

const users:User[] = [
  {
    name:'John',
    email:'john@example.com'
  },
  {
    name:'Juan',
    email:'juan@example.com'
  },
  {
    name:'Kevin',
    email:'kevin@example.com'
  },
]

//Resolver
const resolvers = {
  Query:{
    users : () =>users, 
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const {url}= await startStandaloneServer(server, {
  listen:{port: 4000}
});

console.log(`🚀  Server ready at: ${url}`);
