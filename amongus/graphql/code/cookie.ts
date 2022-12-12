import { graphql } from "../generated/gql";

export const GET_COOKIE = graphql(/* GraphQL */ `
  query GetCookie {
    cookie
  }
`);
