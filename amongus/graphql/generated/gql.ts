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
    "\n  query GetCookie {\n    cookie\n  }\n": types.GetCookieDocument,
    "\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          userId\n        }\n        token\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  subscription OnPixelChange {\n    onPixelChange {\n      row\n      col\n      color\n    }\n  }\n": types.OnPixelChangeDocument,
    "\n  query GetUsers($first: Int!) {\n    users(first: $first) {\n      nodes {\n        username\n      }\n    } \n  }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changePixel($input: ChangePixelColorInput!) {\n    changePixelColor(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation changePixel($input: ChangePixelColorInput!) {\n    changePixelColor(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCookie {\n    cookie\n  }\n"): (typeof documents)["\n  query GetCookie {\n    cookie\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          userId\n        }\n        token\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          userId\n        }\n        token\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription OnPixelChange {\n    onPixelChange {\n      row\n      col\n      color\n    }\n  }\n"): (typeof documents)["\n  subscription OnPixelChange {\n    onPixelChange {\n      row\n      col\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers($first: Int!) {\n    users(first: $first) {\n      nodes {\n        username\n      }\n    } \n  }\n"): (typeof documents)["\n  query GetUsers($first: Int!) {\n    users(first: $first) {\n      nodes {\n        username\n      }\n    } \n  }\n"];

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