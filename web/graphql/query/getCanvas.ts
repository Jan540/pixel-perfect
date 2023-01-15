import { graphql } from '../../gql';

const GET_CANVAS = graphql(`
  query getCanvas{
    getCanvas {
        user_id
        canvas_id
        colors
    }
  }
`);

export default GET_CANVAS;
