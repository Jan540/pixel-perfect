import { graphql } from '../../gql';

//query to load canvas where CanvasID is a string
const LOAD_CANVAS = graphql(`
    query loadCanvas($input: String!) {
        loadCanvas(canvas_id: $input)
    }
`);

export default LOAD_CANVAS;