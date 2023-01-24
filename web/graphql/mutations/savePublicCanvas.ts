import { graphql } from '../../gql';

const SAVE_PUBLIC_CANVAS = graphql(`
  mutation savePublicCanvas($input: SavePublicCanvasInput!) {
    savePublicCanvas(input: $input) {
      string
    }
  }
`);

export default SAVE_PUBLIC_CANVAS;