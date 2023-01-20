import { graphql } from "../../gql";

const REMOVE_FRIEND = graphql(`
  mutation removeFriend($input: RemoveFriendInput!) {
    removeFriend(input: $input) {
      boolean
    }
  }
`);

export default REMOVE_FRIEND;
