import { graphql } from "../../gql";

const REFRSH = graphql(`
  mutation refreshToken {
    refreshUser {
      userResponse {
        user {
          userId
          email
          username
        }
        token
      }
    }
  }
`);

export default REFRSH;
