import { graphql } from "../generated/gql";

export const ON_PIXEL_CHANGE = graphql(/* GraphQL */ `
  subscription OnPixelChange($canvasId: String!) {
    onPixelChange(canvasId: $canvasId) {
      row
      col
      color
    }
  }
`);
