import { graphql } from "../../gql";

const GET_FIRSTFRIENDS = graphql(`
  query getFirstFriends {
    getFriends(first: 5) {
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

export default GET_FIRSTFRIENDS;
