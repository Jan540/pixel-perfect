import { graphql } from "../../gql";

const ACCEPTFRIEND = graphql(`
  mutation acceptFriendRequest($input: AcceptFriendRequestInput!) {
    acceptFriendRequest(input: $input) {
      boolean
    }
  }
`);

export default ACCEPTFRIEND;
