import { gql } from "@apollo/client";
//mutations
export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation setUserInfo(
    $username: String
    $email: String
    $password: String
    $currentAddress: String
    $destinationAddress: String
    $movingDate: String
  ) {
    setUserInfo(
      username: $username
      email: $email
      password: $password
      currentAddress: $currentAddress
      destinationAddress: $destinationAddress
      movingDate: $movingDate
    ) {
      username
      email
      password
      currentAddress
      destinationAddress
      movingDate
    }
  }
`;

export const ADD_LIST = gql`
mutation addList($listName: String!) {
  addList(listName: $listName) {
    _id
    listName
    listUser
    listItems: {
      _id
      itemName
      itemNotes
    }
  }
}
`;

export const ADD_LIST_ITEM = gql`
  mutation addListItem($input:ListItemInput) {
    addListItem(input:$input) {
      _id
      listName
      listUser
      listItems: {
        _id
        itemName
        itemNotes
      }
    }
  }
`;

export const UPDATE_LIST_ITEM = gql`
  mutation updateListItem($id: ID!, $input:ListItemInput) {
    updateListItem(id: $id, input:$input) {
      _id
      listName
      listUser
      listItems: {
        _id
        itemName
        itemNotes
      }
    }
  }
`;

export const REMOVE_LIST = gql`
mutation removeList($listId: ID!) {
  removeList(listId: $listId) {
    _id
    listName
    listUser
    listItems: {
      _id
      itemName
      itemNotes
    }
  }
}
`;

export const REMOVE_LIST_ITEM = gql`
mutation removeListITEM($listId: ID!, $listItemId: ID!) {
  removeList(listId: $listId, listItemId: $listItemId) {
    _id
    listName
    listUser
    listItems: {
      _id
      itemName
      itemNotes
    }
  }
}
`;
