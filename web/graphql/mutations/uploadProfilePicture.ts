import { gql, useMutation } from "@apollo/client";
import { graphql } from "../../gql";

const UPLOAD_PRFPIC = graphql(`
  mutation uploadProfilePICTURE($input: UploadProfilePictureInput!) {
    uploadProfilePicture(input: $input) {
      userResponse {
        user {
          username
        }
        error
      }
    }
  }
`);

export default UPLOAD_PRFPIC;
