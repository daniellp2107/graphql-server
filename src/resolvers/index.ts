


//Resolver
export const resolvers = {
  Query:{
    users:() => [],
    user: async (parent, args, {dataSources}, info) => {
      return dataSources.usersAPI.getAllUsers();
    },
  }
};