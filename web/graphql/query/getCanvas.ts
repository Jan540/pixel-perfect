import { graphql } from "../../gql";

const GET_CANVAS = graphql(`
  query getCanvas {
    getCanvas {
      userId
      canvasId
      colors
      name
    }
  }
`);

export default GET_CANVAS;
