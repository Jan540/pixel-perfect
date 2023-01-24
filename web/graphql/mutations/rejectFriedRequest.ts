import { graphql } from "../../gql";

const REJECTFRIEND = graphql(`
  mutation rejectFriendRequest($input: RejectFriendRequestInput!) {
    rejectFriendRequest(input: $input) {
      boolean
    }
  }
`);

export default REJECTFRIEND;
