import { graphql } from "../../gql";

export const GET_USERS = graphql(/* GraphQL */ `
  query getUsers {
    users(first: 10) {
      nodes {
        username
        email
        role
      }
    }
  }
`);
