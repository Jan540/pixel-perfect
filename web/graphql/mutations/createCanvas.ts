import { graphql } from "../../gql";

const CREATE_CANVAS = graphql(`
  mutation createCanvas($input: CreateCanvasInput!) {
    createCanvas(input: $input) {
      canvas {
        userId
        canvasId
      }
    }
  }
`);

export default CREATE_CANVAS;
