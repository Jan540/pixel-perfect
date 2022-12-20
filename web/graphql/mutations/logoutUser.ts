import { graphql } from "../../gql";

const LOGOUT = graphql(`
  mutation logoutUser{
    logoutUser {
      boolean
    }
  }
`);

export default LOGOUT;
