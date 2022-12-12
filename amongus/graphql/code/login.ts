import { graphql } from "../generated/gql";

export const LOGIN = graphql(/* GraphQL */ `
  mutation loginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      userResponse {
        user {
          username
          userId
        }
        token
      }
    }
  }
`);
