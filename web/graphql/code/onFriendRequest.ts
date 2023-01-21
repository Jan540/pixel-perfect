import { graphql } from "../../gql";

export const ON_FRIENDREQUEST = graphql(/* GraphQL */ `
  subscription OnFriendRequest($input: String!) {
    onAddFriend(userId: $input) {
      toFriedUserId
      username
    }
  }
`);
