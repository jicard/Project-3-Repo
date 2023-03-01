const { gql } = require("apollo-server-express");
const { Date } = require("graphql-scalars");

const typeDefs = gql`
 Date
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

  type Lists {
    packingList: [PackingList]
    addressChanges: [AddressChange]
    shoppingList: [ShoppingList]
    movers: [Mover]
    cleaningList: [CleaningList]
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
    addList
    setListItem

  }
`;

module.exports = typeDefs;
