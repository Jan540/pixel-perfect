import { graphql } from '../../gql';

const LOAD_PUBLIC_CANVAS = graphql(`
  query loadPublicCanvas($input: String!) {
    loadPublicCanvas(canvas_id: $input)
  }
`);

export default LOAD_PUBLIC_CANVAS;