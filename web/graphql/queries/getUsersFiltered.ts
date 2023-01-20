import { graphql } from "../../gql";

const USERSFILTERED = graphql(`
  query usersFiltered($input: String!) {
    usersFiltered(usernameFilter: $input) {
      username
      userId
      role
    }
  }
`);

export default USERSFILTERED;
