import { gql } from "@apollo/client";
import { graphql } from "../../gql";

const GET_USERS = graphql(`
  query getUsers {
    users {
      email
      username
    }
  }
`);

export default GET_USERS;
