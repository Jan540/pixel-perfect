import { graphql } from "../../gql";

const CREATE_CANVAS = graphql(`
  mutation createCanvas {
    createCanvas {
      canvas {
        userId
        canvasId
      }
    }
  }
`);

export default CREATE_CANVAS;
