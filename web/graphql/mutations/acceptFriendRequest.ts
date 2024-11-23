import { gql } from "@apollo/client";
import { graphql } from "../../gql";

const ACCEPTFRIEND = gql`
  mutation acceptFriendRequest($input: AcceptFriendRequestInput!) {
    acceptFriendRequest(input: $input) {
      boolean
    }
  }
`;

export default ACCEPTFRIEND;
