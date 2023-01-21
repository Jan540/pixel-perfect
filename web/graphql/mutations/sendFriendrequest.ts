import { graphql } from "../../gql";

export const SEND_FRIENDREQUEST = graphql(/* GraphQL */ `
  mutation SendFriendRequest($input: SendFriendRequestInput!) {
    sendFriendRequest(input: $input) {
      boolean
    }
  }
`);
