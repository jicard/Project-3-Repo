const { gql } = require("apollo-server-express");
//const { Date } = require("graphql-scalars");

const typeDefs = gql`
  
 type User {
    _id: ID!
    username: String!
    email: String!
    lists: [List]
  }

  input ListItemInput {
    listId: ID!
    itemName: String
    itemNotes: String
  }

  type List {
    _id: ID!
    listTitle: String!
    listContent: String!
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
    addList(listTitle: String!, listContent: String!): List
    addListItem(input: ListItemInput): List
    updateListItem(id: ID!, input: ListItemInput): List
    removeList(listId: ID!): List
    removeListItem(listId: ID!, listItemId: ID!): List
  }
`;

module.exports = typeDefs;

//List keys (beyond MVP)
// packingList: [PackingList]
// addressChanges: [AddressChange]
// shoppingList: [ShoppingList]
// movers: [Mover]
// cleaningList: [CleaningList]
