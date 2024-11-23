import { gql } from "@apollo/client";
import { graphql } from "../../gql";

const CREATE_CANVAS = gql`
  mutation createCanvas($input: CreateCanvasInput!) {
    createCanvas(input: $input) {
      canvas {
        userId
        canvasId
      }
    }
  }
`;

export default CREATE_CANVAS;
