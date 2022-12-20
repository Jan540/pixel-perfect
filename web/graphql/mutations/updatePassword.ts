import { graphql } from "../../gql";

const UPDATEPASSWORD = graphql(`
  mutation updatePassword($input: UpdatePasswordInput!) {
    updatePassword(input: $input) {
      boolean
    }
  }
`);

export default UPDATEPASSWORD;
