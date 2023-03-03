const { gql } = require("apollo-server-express");
//const { Date } = require("graphql-scalars");

const typeDefs = gql`
 
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    currentAddress: String
    destinationZip: String
    movingDate: Date
    lists: [Lists]
    
  }

  input ListItemInput {
    listId: ID!
    itemName: String
    itemNotes: String
  }

  type Lists {
    listName: String!
    listUser: String!
    listItems: [ListItem]
    
  }

  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: User
    me: User

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addList (listName: String!): Lists
    addListItem(input: ListItemInput ): Lists
    updateListItem (id: ID!, input: ListItemInput ): Lists
    removeList (listId: ID!): Lists

  }
`;

module.exports = typeDefs;

//List keys (beyond MVP)
// packingList: [PackingList]
// addressChanges: [AddressChange]
// shoppingList: [ShoppingList]
// movers: [Mover]
// cleaningList: [CleaningList]
