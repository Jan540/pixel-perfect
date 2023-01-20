import { graphql } from "../../gql";

const GET_USERBYID = graphql(`
  query getUserById($userId: String!) {
    userById(userId: $userId) {
      username
      role
      userId
    }
  }
`);

export default GET_USERBYID;
