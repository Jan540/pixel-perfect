import { graphql } from '../../gql';

const CREATE_PUBLIC_CANVAS = graphql(`
  mutation createPublicCanvas {
    createPublicCanvas {
      publicCanvas {
        publicCanvasId
        colors
      }
    }
  }
`);