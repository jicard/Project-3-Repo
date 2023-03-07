const { gql } = require("apollo-server-express");
//const { Date } = require("graphql-scalars");

const typeDefs = gql`
  
 type User {
    _id: ID!
    username: String!
    email: String!
    lists: [Lists]
  }

  input ListItemInput {
    listId: ID!
    itemName: String
    itemNotes: String
  }

  type Lists {
    _id: ID!
    listName: String!
    listUser: String!
    listItems: [ListItem]
  }

  type ListItem {
    _id: ID!
    listId: ID!
    itemName: String!
    itemNotes: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    setUserInfo (username: String, email: String, password: String, currentAddress: String, destinationAddress: String, movingDate: String): User
    addList(listName: String!): Lists
    addListItem(input: ListItemInput): Lists
    updateListItem(id: ID!, input: ListItemInput): Lists
    removeList(listId: ID!): Lists
    removeListItem(listId: ID!, listItemId: ID!): Lists
  }
`;

module.exports = typeDefs;

//List keys (beyond MVP)
// packingList: [PackingList]
// addressChanges: [AddressChange]
// shoppingList: [ShoppingList]
// movers: [Mover]
// cleaningList: [CleaningList]
