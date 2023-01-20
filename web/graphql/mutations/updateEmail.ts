import { graphql } from "../../gql";

const UPDATEEMAIL = graphql(`
  mutation updateEmail($input: UpdateEmailInput!) {
    updateEmail(input: $input) {
      boolean
    }
  }
`);

export default UPDATEEMAIL;
