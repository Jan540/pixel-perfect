import { gql } from "@apollo/client";
import { graphql } from "../generated/gql";

export const GET_USERS = graphql(/* GraphQL */ `
  query GetUsers($first: Int!) {
    users(first: $first) {
      nodes {
        username
      }
    } 
  }
`);
