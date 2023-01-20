/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation changePixel($input: ChangePixelColorInput!) {\n    changePixelColor(input: $input) {\n      boolean\n    }\n  }\n": types.ChangePixelDocument,
    "\n  query getUsers {\n    users(first: 10) {\n      nodes {\n        username\n        email\n        role\n      }\n    }\n  }\n": types.GetUsersDocument,
    "\n  subscription OnPixelChange($canvasId: String!) {\n    onPixelChange(canvasId: $canvasId) {\n      row\n      col\n      color\n    }\n  }\n": types.OnPixelChangeDocument,
    "\n  mutation createCanvas {\n    createCanvas {\n      canvas {\n        userId\n        canvasId\n      }\n    }\n  }\n": types.CreateCanvasDocument,
    "\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          email\n          userId\n        }\n        token\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation logoutUser{\n    logoutUser {\n      boolean\n    }\n  }\n": types.LogoutUserDocument,
    "\n  mutation refreshToken {\n    refreshUser {\n      userResponse {\n        user {\n          userId\n          email\n          username\n        }\n        token\n      }\n    }\n  }\n": types.RefreshTokenDocument,
    "\n  mutation registerUser($input: RegisterUserInput!) {\n    registerUser(input: $input) {\n      userResponse {\n        user {\n          username\n          email\n        }\n        token\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n    mutation saveCanvas($input: SaveCanvasInput!) {\n        saveCanvas(input: $input){\n            string\n        }\n    }\n": types.SaveCanvasDocument,
    "\n  mutation updatePassword($input: UpdatePasswordInput!) {\n    updatePassword(input: $input) {\n      boolean\n    }\n  }\n": types.UpdatePasswordDocument,
    "\n  mutation uploadProfilePICTURE($input: UploadProfilePictureInput!) {\n    uploadProfilePicture(input: $input) {\n      user {\n        userId\n      }\n    }\n  }\n": types.UploadProfilePictureDocument,
    "\n  query getCanvas {\n    getCanvas {\n      userId\n      canvasId\n      colors\n    }\n  }\n": types.GetCanvasDocument,
    "\n    query loadCanvas($input: String!) {\n        loadCanvas(canvas_id: $input)\n    }\n": types.LoadCanvasDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changePixel($input: ChangePixelColorInput!) {\n    changePixelColor(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation changePixel($input: ChangePixelColorInput!) {\n    changePixelColor(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUsers {\n    users(first: 10) {\n      nodes {\n        username\n        email\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUsers {\n    users(first: 10) {\n      nodes {\n        username\n        email\n        role\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription OnPixelChange($canvasId: String!) {\n    onPixelChange(canvasId: $canvasId) {\n      row\n      col\n      color\n    }\n  }\n"): (typeof documents)["\n  subscription OnPixelChange($canvasId: String!) {\n    onPixelChange(canvasId: $canvasId) {\n      row\n      col\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createCanvas {\n    createCanvas {\n      canvas {\n        userId\n        canvasId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createCanvas {\n    createCanvas {\n      canvas {\n        userId\n        canvasId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          email\n          userId\n        }\n        token\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          email\n          userId\n        }\n        token\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation logoutUser{\n    logoutUser {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation logoutUser{\n    logoutUser {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation refreshToken {\n    refreshUser {\n      userResponse {\n        user {\n          userId\n          email\n          username\n          role\n        }\n        token\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation refreshToken {\n    refreshUser {\n      userResponse {\n        user {\n          userId\n          email\n          username\n          role\n        }\n        token\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation registerUser($input: RegisterUserInput!) {\n    registerUser(input: $input) {\n      userResponse {\n        user {\n          userId\n          username\n          email\n        }\n        token\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation registerUser($input: RegisterUserInput!) {\n    registerUser(input: $input) {\n      userResponse {\n        user {\n          userId\n          username\n          email\n        }\n        token\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeFriend($input: RemoveFriendInput!) {\n    removeFriend(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation removeFriend($input: RemoveFriendInput!) {\n    removeFriend(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateEmail($input: UpdateEmailInput!) {\n    updateEmail(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation updateEmail($input: UpdateEmailInput!) {\n    updateEmail(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveCanvas($input: SaveCanvasInput!) {\n        saveCanvas(input: $input){\n            string\n        }\n    }\n"): (typeof documents)["\n    mutation saveCanvas($input: SaveCanvasInput!) {\n        saveCanvas(input: $input){\n            string\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePassword($input: UpdatePasswordInput!) {\n    updatePassword(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation updatePassword($input: UpdatePasswordInput!) {\n    updatePassword(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadProfilePICTURE($input: UploadProfilePictureInput!) {\n    uploadProfilePicture(input: $input) {\n      user {\n        userId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation uploadProfilePICTURE($input: UploadProfilePictureInput!) {\n    uploadProfilePicture(input: $input) {\n      user {\n        userId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCanvas {\n    getCanvas {\n      userId\n      canvasId\n      colors\n    }\n  }\n"): (typeof documents)["\n  query getCanvas {\n    getCanvas {\n      userId\n      canvasId\n      colors\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query loadCanvas($input: String!) {\n        loadCanvas(canvas_id: $input)\n    }\n"): (typeof documents)["\n    query loadCanvas($input: String!) {\n        loadCanvas(canvas_id: $input)\n    }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;