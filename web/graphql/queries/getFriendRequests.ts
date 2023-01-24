import { graphql } from "../../gql";

const GET_FRIENDREQUESTS = graphql(`
  query getFriendRequests{
    getFriendRequests {
      username
      userId
    }
  }
`);

export default GET_FRIENDREQUESTS;
