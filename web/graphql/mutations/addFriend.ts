import { graphql } from "../../gql";

const ADD_FRIEND = graphql(`
  mutation addFriend($input: AddFriendInput!) {
    addFriend(input: $input) {
      user {
        username
      }
    }
  }
`);

export default ADD_FRIEND;
