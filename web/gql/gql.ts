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
    "\n  subscription OnFriendRequest($input: String!) {\n    onAddFriend(userId: $input) {\n      toFriedUserId\n      senderId\n      username\n    }\n  }\n": types.OnFriendRequestDocument,
    "\n  subscription OnPixelChange($canvasId: String!) {\n    onPixelChange(canvasId: $canvasId) {\n      row\n      col\n      color\n    }\n  }\n": types.OnPixelChangeDocument,
    "\n  mutation acceptFriendRequest($input: AcceptFriendRequestInput!) {\n    acceptFriendRequest(input: $input) {\n      boolean\n    }\n  }\n": types.AcceptFriendRequestDocument,
    "\n  mutation createCanvas($input: CreateCanvasInput!) {\n    createCanvas(input: $input) {\n      canvas {\n        userId\n        canvasId\n      }\n    }\n  }\n": types.CreateCanvasDocument,
    "\n  mutation createPublicCanvas {\n    createPublicCanvas {\n      publicCanvas {\n        publicCanvasId\n        colors\n      }\n    }\n  }\n": types.CreatePublicCanvasDocument,
    "\n  mutation loginUser($input: LoginUserInput!) {\n    loginUser(input: $input) {\n      userResponse {\n        user {\n          username\n          email\n          userId\n        }\n        token\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation logoutUser{\n    logoutUser {\n      boolean\n    }\n  }\n": types.LogoutUserDocument,
    "\n  mutation refreshToken {\n    refreshUser {\n      userResponse {\n        user {\n          userId\n          email\n          username\n          role\n        }\n        token\n      }\n    }\n  }\n": types.RefreshTokenDocument,
    "\n  mutation registerUser($input: RegisterUserInput!) {\n    registerUser(input: $input) {\n      userResponse {\n        user {\n          userId\n          username\n          email\n        }\n        token\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation rejectFriendRequest($input: RejectFriendRequestInput!) {\n    rejectFriendRequest(input: $input) {\n      boolean\n    }\n  }\n": types.RejectFriendRequestDocument,
    "\n  mutation removeFriend($input: RemoveFriendInput!) {\n    removeFriend(input: $input) {\n      boolean\n    }\n  }\n": types.RemoveFriendDocument,
    "\n    mutation saveCanvas($input: SaveCanvasInput!) {\n        saveCanvas(input: $input){\n            string\n        }\n    }\n": types.SaveCanvasDocument,
    "\n  mutation savePublicCanvas($input: SavePublicCanvasInput!) {\n    savePublicCanvas(input: $input) {\n      string\n    }\n  }\n": types.SavePublicCanvasDocument,
    "\n  mutation SendFriendRequest($input: SendFriendRequestInput!) {\n    sendFriendRequest(input: $input) {\n      boolean\n    }\n  }\n": types.SendFriendRequestDocument,
    "\n  mutation updateEmail($input: UpdateEmailInput!) {\n    updateEmail(input: $input) {\n      boolean\n    }\n  }\n": types.UpdateEmailDocument,
    "\n  mutation updatePassword($input: UpdatePasswordInput!) {\n    updatePassword(input: $input) {\n      boolean\n    }\n  }\n": types.UpdatePasswordDocument,
    "\n  mutation uploadProfilePICTURE($input: UploadProfilePictureInput!) {\n    uploadProfilePicture(input: $input) {\n      user {\n        userId\n      }\n    }\n  }\n": types.UploadProfilePictureDocument,
    "\n  query getFirstFriends {\n    getFriends(first: 5) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n": types.GetFirstFriendsDocument,
    "\n  query getFriendRequests{\n    getFriendRequests {\n      username\n      userId\n    }\n  }\n": types.GetFriendRequestsDocument,
    "\n  query getNextFriends($input: String!) {\n    getFriends(first: 5, after: $input) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n": types.GetNextFriendsDocument,
    "\n  query getPreviousFriends($input: String!) {\n    getFriends(last: 5, before: $input) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n": types.GetPreviousFriendsDocument,
    "\n  query getUserById($userId: String!) {\n    userById(userId: $userId) {\n      username\n      role\n      userId\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  query usersFiltered($input: String!) {\n    usersFiltered(usernameFilter: $input) {\n      username\n      userId\n      role\n    }\n  }\n": types.UsersFilteredDocument,
    "\n  query isBefriended ($input: String!) {\n    isBefriended(friendId: $input)\n  }\n": types.IsBefriendedDocument,
    "\n  query getCanvas {\n    getCanvas {\n      userId\n      canvasId\n      colors\n      name\n    }\n  }\n": types.GetCanvasDocument,
    "\n    query loadCanvas($input: String!) {\n        loadCanvas(canvas_id: $input)\n    }\n": types.LoadCanvasDocument,
    "\n  query loadPublicCanvas($input: String!) {\n    loadPublicCanvas(canvas_id: $input)\n  }\n": types.LoadPublicCanvasDocument,
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
export function graphql(source: "\n  subscription OnFriendRequest($input: String!) {\n    onAddFriend(userId: $input) {\n      toFriedUserId\n      senderId\n      username\n    }\n  }\n"): (typeof documents)["\n  subscription OnFriendRequest($input: String!) {\n    onAddFriend(userId: $input) {\n      toFriedUserId\n      senderId\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription OnPixelChange($canvasId: String!) {\n    onPixelChange(canvasId: $canvasId) {\n      row\n      col\n      color\n    }\n  }\n"): (typeof documents)["\n  subscription OnPixelChange($canvasId: String!) {\n    onPixelChange(canvasId: $canvasId) {\n      row\n      col\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addFriend($input: AddFriendInput!) {\n    addFriend(input: $input) {\n      user {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addFriend($input: AddFriendInput!) {\n    addFriend(input: $input) {\n      user {\n        username\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation rejectFriendRequest($input: RejectFriendRequestInput!) {\n    rejectFriendRequest(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation rejectFriendRequest($input: RejectFriendRequestInput!) {\n    rejectFriendRequest(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeFriend($input: RemoveFriendInput!) {\n    removeFriend(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation removeFriend($input: RemoveFriendInput!) {\n    removeFriend(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveCanvas($input: SaveCanvasInput!) {\n        saveCanvas(input: $input){\n            string\n        }\n    }\n"): (typeof documents)["\n    mutation saveCanvas($input: SaveCanvasInput!) {\n        saveCanvas(input: $input){\n            string\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation savePublicCanvas($input: SavePublicCanvasInput!) {\n    savePublicCanvas(input: $input) {\n      string\n    }\n  }\n"): (typeof documents)["\n  mutation savePublicCanvas($input: SavePublicCanvasInput!) {\n    savePublicCanvas(input: $input) {\n      string\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendFriendRequest($input: SendFriendRequestInput!) {\n    sendFriendRequest(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation SendFriendRequest($input: SendFriendRequestInput!) {\n    sendFriendRequest(input: $input) {\n      boolean\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateEmail($input: UpdateEmailInput!) {\n    updateEmail(input: $input) {\n      boolean\n    }\n  }\n"): (typeof documents)["\n  mutation updateEmail($input: UpdateEmailInput!) {\n    updateEmail(input: $input) {\n      boolean\n    }\n  }\n"];
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
export function graphql(source: "\n  query getFirstFriends {\n    getFriends(first: 5) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query getFirstFriends {\n    getFriends(first: 5) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFriendRequests{\n    getFriendRequests {\n      username\n      userId\n    }\n  }\n"): (typeof documents)["\n  query getFriendRequests{\n    getFriendRequests {\n      username\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getNextFriends($input: String!) {\n    getFriends(first: 5, after: $input) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query getNextFriends($input: String!) {\n    getFriends(first: 5, after: $input) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPreviousFriends($input: String!) {\n    getFriends(last: 5, before: $input) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPreviousFriends($input: String!) {\n    getFriends(last: 5, before: $input) {\n      nodes {\n        username\n        userId\n        role\n      }\n      edges {\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserById($userId: String!) {\n    userById(userId: $userId) {\n      username\n      role\n      userId\n    }\n  }\n"): (typeof documents)["\n  query getUserById($userId: String!) {\n    userById(userId: $userId) {\n      username\n      role\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query usersFiltered($input: String!) {\n    usersFiltered(usernameFilter: $input) {\n      username\n      userId\n      role\n    }\n  }\n"): (typeof documents)["\n  query usersFiltered($input: String!) {\n    usersFiltered(usernameFilter: $input) {\n      username\n      userId\n      role\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query isBefriended ($input: String!) {\n    isBefriended(friendId: $input)\n  }\n"): (typeof documents)["\n  query isBefriended ($input: String!) {\n    isBefriended(friendId: $input)\n  }\n"];
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
 */
export function graphql(source: "\n  query loadPublicCanvas($input: String!) {\n    loadPublicCanvas(canvas_id: $input)\n  }\n"): (typeof documents)["\n  query loadPublicCanvas($input: String!) {\n    loadPublicCanvas(canvas_id: $input)\n  }\n"];

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