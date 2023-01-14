import { graphql } from "../../gql";

export const CHANGE_PIXEL = graphql(/* GraphQL */ `
  mutation changePixel($input: ChangePixelColorInput!) {
    changePixelColor(input: $input) {
      boolean
    }
  }
`);
