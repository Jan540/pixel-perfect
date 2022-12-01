import { gql, useMutation } from "@apollo/client";
import { graphql } from "../../gql";

const REGISTER = graphql(`
  mutation register($input: RegisterUserInput!) {
    registerUser(input: $input) {
      userResponse {
        user {
          userId
        }
        error
      }
    }
  }
`);

export default REGISTER;
