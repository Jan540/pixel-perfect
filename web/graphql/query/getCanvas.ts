import { graphql } from "../../gql";

const GET_CANVAS = graphql(`
  query getCanvas {
    getCanvas {
      userId
      canvasId
      colors
    }
  }
`);

export default GET_CANVAS;
