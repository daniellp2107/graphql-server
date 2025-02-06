import { users } from "../data/users.data";


//Resolver
export const resolvers = {
  Query:{
    users : () =>users, 
    user: (parent, args, context, info) => {
      const {uid} = args.id;

      return users.find(user => user.id === uid);
    }
    
  }
};