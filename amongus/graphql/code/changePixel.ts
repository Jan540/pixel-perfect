import { graphql } from "../generated/gql";

export const CHANGE_PIXEL = graphql(/* GraphQL */ `
  mutation changePixel($input: ChangePixelColorInput!) {
    changePixelColor(input: $input) {
      boolean
    }
  }
`);
