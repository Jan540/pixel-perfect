/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  UUID: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AcceptFriendRequestInput = {
  friendId: Scalars['String'];
};

export type AcceptFriendRequestPayload = {
  __typename?: 'AcceptFriendRequestPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type Canvas = {
  __typename?: 'Canvas';
  canvasId: Scalars['String'];
  colors: Scalars['String'];
  name: Scalars['String'];
  user: User;
  userId: Scalars['UUID'];
};

export type ChangePixelColorInput = {
  payload: PixelChangePayloadInput;
};

export type ChangePixelColorPayload = {
  __typename?: 'ChangePixelColorPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type CreateCanvasInput = {
  name: Scalars['String'];
};

export type CreateCanvasPayload = {
  __typename?: 'CreateCanvasPayload';
  canvas?: Maybe<Canvas>;
};

export type CreatePublicCanvasPayload = {
  __typename?: 'CreatePublicCanvasPayload';
  publicCanvas?: Maybe<PublicCanvas>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type DeleteUserInput = {
  email: Scalars['String'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<User>;
};

export type FriendRequestPayload = {
  __typename?: 'FriendRequestPayload';
  senderId: Scalars['String'];
  toFriedUserId: Scalars['String'];
  username: Scalars['String'];
};

export type FriendRequestPayloadInput = {
  senderId: Scalars['String'];
  toFriedUserId: Scalars['String'];
  username: Scalars['String'];
};

/** A connection to a list of items. */
export type GetFriendsConnection = {
  __typename?: 'GetFriendsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<GetFriendsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GetFriendsEdge = {
  __typename?: 'GetFriendsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserPayload = {
  __typename?: 'LoginUserPayload';
  userResponse?: Maybe<UserResponse>;
};

export type LogoutUserPayload = {
  __typename?: 'LogoutUserPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: AcceptFriendRequestPayload;
  changePixelColor: ChangePixelColorPayload;
  createCanvas: CreateCanvasPayload;
  createPublicCanvas: CreatePublicCanvasPayload;
  deleteUser: DeleteUserPayload;
  loginUser: LoginUserPayload;
  logoutUser: LogoutUserPayload;
  refreshUser: RefreshUserPayload;
  registerUser: RegisterUserPayload;
  rejectFriendRequest: RejectFriendRequestPayload;
  removeFriend: RemoveFriendPayload;
  saveCanvas: SaveCanvasPayload;
  savePublicCanvas: SavePublicCanvasPayload;
  sendFriendRequest: SendFriendRequestPayload;
  updateEmail: UpdateEmailPayload;
  updatePassword: UpdatePasswordPayload;
  updateUsername: UpdateUsernamePayload;
  uploadProfilePicture: UploadProfilePicturePayload;
};


export type MutationAcceptFriendRequestArgs = {
  input: AcceptFriendRequestInput;
};


export type MutationChangePixelColorArgs = {
  input: ChangePixelColorInput;
};


export type MutationCreateCanvasArgs = {
  input: CreateCanvasInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationRejectFriendRequestArgs = {
  input: RejectFriendRequestInput;
};


export type MutationRemoveFriendArgs = {
  input: RemoveFriendInput;
};


export type MutationSaveCanvasArgs = {
  input: SaveCanvasInput;
};


export type MutationSavePublicCanvasArgs = {
  input: SavePublicCanvasInput;
};


export type MutationSendFriendRequestArgs = {
  input: SendFriendRequestInput;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateUsernameArgs = {
  input: UpdateUsernameInput;
};


export type MutationUploadProfilePictureArgs = {
  input: UploadProfilePictureInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PixelChangePayload = {
  __typename?: 'PixelChangePayload';
  canvasId: Scalars['String'];
  col: Scalars['Int'];
  color: Scalars['String'];
  row: Scalars['Int'];
};

export type PixelChangePayloadInput = {
  canvasId: Scalars['String'];
  col: Scalars['Int'];
  color: Scalars['String'];
  row: Scalars['Int'];
};

export type PublicCanvas = {
  __typename?: 'PublicCanvas';
  colors: Scalars['String'];
  publicCanvasId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCanvas: Array<Canvas>;
  getFriendRequests: Array<User>;
  getFriends?: Maybe<GetFriendsConnection>;
  isBefriended: Scalars['Boolean'];
  loadCanvas: Scalars['String'];
  loadPublicCanvas: Scalars['String'];
  me?: Maybe<User>;
  userByEmail: Array<User>;
  userById: User;
  users?: Maybe<UsersConnection>;
  usersFiltered: Array<User>;
};


export type QueryGetFriendsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryIsBefriendedArgs = {
  friendId: Scalars['String'];
};


export type QueryLoadCanvasArgs = {
  canvas_id: Scalars['String'];
};


export type QueryLoadPublicCanvasArgs = {
  canvas_id: Scalars['String'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['String'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<UserSortInput>>;
  where?: InputMaybe<UserFilterInput>;
};


export type QueryUsersFilteredArgs = {
  usernameFilter: Scalars['String'];
};

export type RefreshUserPayload = {
  __typename?: 'RefreshUserPayload';
  userResponse?: Maybe<UserResponse>;
};

export type RegisterUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  userResponse?: Maybe<UserResponse>;
};

export type RejectFriendRequestInput = {
  friendId: Scalars['String'];
};

export type RejectFriendRequestPayload = {
  __typename?: 'RejectFriendRequestPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type RemoveFriendInput = {
  friend_Id: Scalars['String'];
};

export type RemoveFriendPayload = {
  __typename?: 'RemoveFriendPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type SaveCanvasInput = {
  canvas_id: Scalars['String'];
  colors: Scalars['String'];
};

export type SaveCanvasPayload = {
  __typename?: 'SaveCanvasPayload';
  string?: Maybe<Scalars['String']>;
};

export type SavePublicCanvasInput = {
  canvas_id: Scalars['String'];
  colors: Scalars['String'];
};

export type SavePublicCanvasPayload = {
  __typename?: 'SavePublicCanvasPayload';
  string?: Maybe<Scalars['String']>;
};

export type SendFriendRequestInput = {
  payload: FriendRequestPayloadInput;
};

export type SendFriendRequestPayload = {
  __typename?: 'SendFriendRequestPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onAddFriend?: Maybe<FriendRequestPayload>;
  onPixelChange?: Maybe<PixelChangePayload>;
};


export type SubscriptionOnAddFriendArgs = {
  userId: Scalars['String'];
};


export type SubscriptionOnPixelChangeArgs = {
  canvasId: Scalars['String'];
};

export type UpdateEmailInput = {
  newEmail: Scalars['String'];
};

export type UpdateEmailPayload = {
  __typename?: 'UpdateEmailPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdatePasswordPayload = {
  __typename?: 'UpdatePasswordPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type UpdateUsernameInput = {
  username: Scalars['String'];
};

export type UpdateUsernamePayload = {
  __typename?: 'UpdateUsernamePayload';
  user?: Maybe<User>;
};

export type UploadProfilePictureInput = {
  file: Scalars['Upload'];
};

export type UploadProfilePicturePayload = {
  __typename?: 'UploadProfilePicturePayload';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  role: UserRole;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['UUID'];
  username: Scalars['String'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  role?: InputMaybe<UserRoleOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
  username?: InputMaybe<StringOperationFilterInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  token: Scalars['String'];
  user: User;
};

export enum UserRole {
  Admin = 'ADMIN',
  PremiumUser = 'PREMIUM_USER',
  User = 'USER'
}

export type UserRoleOperationFilterInput = {
  eq?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  neq?: InputMaybe<UserRole>;
  nin?: InputMaybe<Array<UserRole>>;
};

export type UserSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  role?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
  userId?: InputMaybe<SortEnumType>;
  username?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UsersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ChangePixelMutationVariables = Exact<{
  input: ChangePixelColorInput;
}>;


export type ChangePixelMutation = { __typename?: 'Mutation', changePixelColor: { __typename?: 'ChangePixelColorPayload', boolean?: boolean | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes?: Array<{ __typename?: 'User', username: string, email: string, role: UserRole }> | null } | null };

export type OnFriendRequestSubscriptionVariables = Exact<{
  input: Scalars['String'];
}>;


export type OnFriendRequestSubscription = { __typename?: 'Subscription', onAddFriend?: { __typename?: 'FriendRequestPayload', toFriedUserId: string, senderId: string, username: string } | null };

export type OnPixelChangeSubscriptionVariables = Exact<{
  canvasId: Scalars['String'];
}>;


export type OnPixelChangeSubscription = { __typename?: 'Subscription', onPixelChange?: { __typename?: 'PixelChangePayload', row: number, col: number, color: string } | null };

export type AcceptFriendRequestMutationVariables = Exact<{
  input: AcceptFriendRequestInput;
}>;


export type AcceptFriendRequestMutation = { __typename?: 'Mutation', acceptFriendRequest: { __typename?: 'AcceptFriendRequestPayload', boolean?: boolean | null } };

export type CreateCanvasMutationVariables = Exact<{
  input: CreateCanvasInput;
}>;


export type CreateCanvasMutation = { __typename?: 'Mutation', createCanvas: { __typename?: 'CreateCanvasPayload', canvas?: { __typename?: 'Canvas', userId: any, canvasId: string } | null } };

export type CreatePublicCanvasMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePublicCanvasMutation = { __typename?: 'Mutation', createPublicCanvas: { __typename?: 'CreatePublicCanvasPayload', publicCanvas?: { __typename?: 'PublicCanvas', publicCanvasId: string, colors: string } | null } };

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginUserPayload', userResponse?: { __typename?: 'UserResponse', token: string, user: { __typename?: 'User', username: string, email: string, userId: any } } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: { __typename?: 'LogoutUserPayload', boolean?: boolean | null } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshUser: { __typename?: 'RefreshUserPayload', userResponse?: { __typename?: 'UserResponse', token: string, user: { __typename?: 'User', userId: any, email: string, username: string, role: UserRole } } | null } };

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserPayload', userResponse?: { __typename?: 'UserResponse', token: string, user: { __typename?: 'User', userId: any, username: string, email: string } } | null } };

export type RejectFriendRequestMutationVariables = Exact<{
  input: RejectFriendRequestInput;
}>;


export type RejectFriendRequestMutation = { __typename?: 'Mutation', rejectFriendRequest: { __typename?: 'RejectFriendRequestPayload', boolean?: boolean | null } };

export type RemoveFriendMutationVariables = Exact<{
  input: RemoveFriendInput;
}>;


export type RemoveFriendMutation = { __typename?: 'Mutation', removeFriend: { __typename?: 'RemoveFriendPayload', boolean?: boolean | null } };

export type SaveCanvasMutationVariables = Exact<{
  input: SaveCanvasInput;
}>;


export type SaveCanvasMutation = { __typename?: 'Mutation', saveCanvas: { __typename?: 'SaveCanvasPayload', string?: string | null } };

export type SavePublicCanvasMutationVariables = Exact<{
  input: SavePublicCanvasInput;
}>;


export type SavePublicCanvasMutation = { __typename?: 'Mutation', savePublicCanvas: { __typename?: 'SavePublicCanvasPayload', string?: string | null } };

export type SendFriendRequestMutationVariables = Exact<{
  input: SendFriendRequestInput;
}>;


export type SendFriendRequestMutation = { __typename?: 'Mutation', sendFriendRequest: { __typename?: 'SendFriendRequestPayload', boolean?: boolean | null } };

export type UpdateEmailMutationVariables = Exact<{
  input: UpdateEmailInput;
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'UpdateEmailPayload', boolean?: boolean | null } };

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UpdatePasswordPayload', boolean?: boolean | null } };

export type UploadProfilePictureMutationVariables = Exact<{
  input: UploadProfilePictureInput;
}>;


export type UploadProfilePictureMutation = { __typename?: 'Mutation', uploadProfilePicture: { __typename?: 'UploadProfilePicturePayload', user?: { __typename?: 'User', userId: any } | null } };

export type GetFirstFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFirstFriendsQuery = { __typename?: 'Query', getFriends?: { __typename?: 'GetFriendsConnection', nodes?: Array<{ __typename?: 'User', username: string, userId: any, role: UserRole }> | null, edges?: Array<{ __typename?: 'GetFriendsEdge', cursor: string }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, startCursor?: string | null } } | null };

export type GetFriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendRequestsQuery = { __typename?: 'Query', getFriendRequests: Array<{ __typename?: 'User', username: string, userId: any }> };

export type GetNextFriendsQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetNextFriendsQuery = { __typename?: 'Query', getFriends?: { __typename?: 'GetFriendsConnection', nodes?: Array<{ __typename?: 'User', username: string, userId: any, role: UserRole }> | null, edges?: Array<{ __typename?: 'GetFriendsEdge', cursor: string }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, startCursor?: string | null } } | null };

export type GetPreviousFriendsQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetPreviousFriendsQuery = { __typename?: 'Query', getFriends?: { __typename?: 'GetFriendsConnection', nodes?: Array<{ __typename?: 'User', username: string, userId: any, role: UserRole }> | null, edges?: Array<{ __typename?: 'GetFriendsEdge', cursor: string }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, endCursor?: string | null, startCursor?: string | null } } | null };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', userById: { __typename?: 'User', username: string, role: UserRole, userId: any } };

export type UsersFilteredQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type UsersFilteredQuery = { __typename?: 'Query', usersFiltered: Array<{ __typename?: 'User', username: string, userId: any, role: UserRole }> };

export type IsBefriendedQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type IsBefriendedQuery = { __typename?: 'Query', isBefriended: boolean };

export type GetCanvasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCanvasQuery = { __typename?: 'Query', getCanvas: Array<{ __typename?: 'Canvas', userId: any, canvasId: string, colors: string, name: string }> };

export type LoadCanvasQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type LoadCanvasQuery = { __typename?: 'Query', loadCanvas: string };

export type LoadPublicCanvasQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type LoadPublicCanvasQuery = { __typename?: 'Query', loadPublicCanvas: string };


export const ChangePixelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changePixel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePixelColorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePixelColor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<ChangePixelMutation, ChangePixelMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const OnFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onAddFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toFriedUserId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<OnFriendRequestSubscription, OnFriendRequestSubscriptionVariables>;
export const OnPixelChangeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnPixelChange"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canvasId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onPixelChange"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"canvasId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canvasId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"row"}},{"kind":"Field","name":{"kind":"Name","value":"col"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<OnPixelChangeSubscription, OnPixelChangeSubscriptionVariables>;
export const AcceptFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AcceptFriendRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<AcceptFriendRequestMutation, AcceptFriendRequestMutationVariables>;
export const CreateCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCanvas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCanvasInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCanvas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canvas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"canvasId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCanvasMutation, CreateCanvasMutationVariables>;
export const CreatePublicCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPublicCanvas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPublicCanvas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicCanvas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicCanvasId"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePublicCanvasMutation, CreatePublicCanvasMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userResponse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userResponse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userResponse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const RejectFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rejectFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RejectFriendRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<RejectFriendRequestMutation, RejectFriendRequestMutationVariables>;
export const RemoveFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveFriendInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<RemoveFriendMutation, RemoveFriendMutationVariables>;
export const SaveCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveCanvas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SaveCanvasInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveCanvas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode<SaveCanvasMutation, SaveCanvasMutationVariables>;
export const SavePublicCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"savePublicCanvas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SavePublicCanvasInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savePublicCanvas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode<SavePublicCanvasMutation, SavePublicCanvasMutationVariables>;
export const SendFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendFriendRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<SendFriendRequestMutation, SendFriendRequestMutationVariables>;
export const UpdateEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UploadProfilePictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadProfilePICTURE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadProfilePictureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadProfilePicture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;
export const GetFirstFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFirstFriends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetFirstFriendsQuery, GetFirstFriendsQueryVariables>;
export const GetFriendRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFriendRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriendRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>;
export const GetNextFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNextFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetNextFriendsQuery, GetNextFriendsQueryVariables>;
export const GetPreviousFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPreviousFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetPreviousFriendsQuery, GetPreviousFriendsQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const UsersFilteredDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"usersFiltered"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersFiltered"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"usernameFilter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UsersFilteredQuery, UsersFilteredQueryVariables>;
export const IsBefriendedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"isBefriended"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isBefriended"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<IsBefriendedQuery, IsBefriendedQueryVariables>;
export const GetCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCanvas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCanvas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"canvasId"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetCanvasQuery, GetCanvasQueryVariables>;
export const LoadCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loadCanvas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loadCanvas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"canvas_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoadCanvasQuery, LoadCanvasQueryVariables>;
export const LoadPublicCanvasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loadPublicCanvas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loadPublicCanvas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"canvas_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoadPublicCanvasQuery, LoadPublicCanvasQueryVariables>;