import { UsersAPI } from "../datasources/users.data"

export interface MyContext { 
  datSources: {
    usersAPI:UsersAPI,
  }
};