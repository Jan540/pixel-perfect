import { graphql } from "../../gql";

const GET_NEXTFRIENDS = graphql(`
  query getNextFriends($input: String!) {
    getFriends(first: 5, after: $input) {
      nodes {
        username
        userId
        role
      }
      edges {
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`);

export default GET_NEXTFRIENDS;
