import { graphql } from "../../gql";

const LOGIN = graphql(`
  mutation loginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      userResponse {
        user {
          username
          email
          userId
        }
        token
      }
    }
  }
`);

export default LOGIN;
