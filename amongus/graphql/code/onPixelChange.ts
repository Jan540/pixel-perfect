import { graphql } from "../generated/gql";

export const ON_PIXEL_CHANGE = graphql(/* GraphQL */ `
  subscription OnPixelChange {
    onPixelChange {
      row
      col
      color
    }
  }
`);
