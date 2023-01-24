import { graphql } from "../../gql";

const ISBEFRIENED = graphql(`
  query isBefriended ($input: String!) {
    isBefriended(friendId: $input)
  }
`);

export default ISBEFRIENED;
