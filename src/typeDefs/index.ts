//Tipo Query 
export const typeDefs = `#graphql
  type User {
    id:ID
    name:String,
    email:String
  }

  input UserID{
    uid:ID
  }

  type Role{
    name:String
  }

  type Query {
    users: [User]
    user:[User]
  }
`;