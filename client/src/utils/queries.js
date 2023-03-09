import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const ALL_LISTS = gql`
  query AllLists {
    allLists {
      _id
      listTitle
      listContent  
  }
}
`;