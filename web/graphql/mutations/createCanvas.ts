import { graphql } from '../../gql';

const CREATE_CANVAS = graphql(`
  mutation createCanvas {
    createCanvas {
      canvas_Model {
        user_id
        canvas_id
      }
    }
  }
`);

export default CREATE_CANVAS;