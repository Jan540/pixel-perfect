import { graphql } from '../../gql';


const SAVE_CANVAS = graphql(`
    mutation saveCanvas($input: SaveCanvasInput!) {
        saveCanvas(input: $input){
            string
        }
    }
`);

export default SAVE_CANVAS;

//example variables that can be used in Banana Cake Pop
// {
//     "input": {
//         "user_id": "1",
//         "canvas_id": "1",
//         "colors": "1"
//     }
// }

