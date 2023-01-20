import { graphql } from "../../gql";

const REFRSH = graphql(`
  mutation refreshToken {
    refreshUser {
      userResponse {
        user {
          userId
          email
          username
          role
        }
        token
      }
    }
  }
`);

export default REFRSH;
