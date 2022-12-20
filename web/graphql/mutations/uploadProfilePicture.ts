import { graphql } from "../../gql";

const UPLOAD_PRFPIC = graphql(`
  mutation uploadProfilePICTURE($input: UploadProfilePictureInput!) {
    uploadProfilePicture(input: $input) {
      user {
        userId
      }
    }
  }
`);

export default UPLOAD_PRFPIC;
