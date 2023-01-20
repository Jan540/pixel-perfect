import { graphql } from "../../gql";

const REGISTER = graphql(`
  mutation registerUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      userResponse {
        user {
          userId
          username
          email
        }
        token
      }
    }
  }
`);

export default REGISTER;
