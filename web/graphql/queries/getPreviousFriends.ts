import { graphql } from "../../gql";

const GET_PREVIOUSFRIENDS = graphql(`
  query getPreviousFriends($input: String!) {
    getFriends(last: 5, before: $input) {
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

export default GET_PREVIOUSFRIENDS;
