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

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type CanvasSubscription = {
  __typename?: 'CanvasSubscription';
  onPixelChange?: Maybe<PixelChangePayload>;
};


export type CanvasSubscriptionOnPixelChangeArgs = {
  canvasId: Scalars['String'];
};

export type Canvas_Model = {
  __typename?: 'Canvas_Model';
  canvas_id: Scalars['String'];
  colors: Scalars['String'];
  user: User;
  user_id: Scalars['UUID'];
};

export type ChangePixelColorInput = {
  payload: PixelChangePayloadInput;
};

export type ChangePixelColorPayload = {
  __typename?: 'ChangePixelColorPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type CreateCanvasPayload = {
  __typename?: 'CreateCanvasPayload';
  canvas_Model?: Maybe<Canvas_Model>;
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
  changePixelColor: ChangePixelColorPayload;
  createCanvas: CreateCanvasPayload;
  deleteUser: DeleteUserPayload;
  loginUser: LoginUserPayload;
  logoutUser: LogoutUserPayload;
  refreshUser: RefreshUserPayload;
  registerUser: RegisterUserPayload;
  saveCanvas: SaveCanvasPayload;
  updatePassword: UpdatePasswordPayload;
  updateUsername: UpdateUsernamePayload;
  uploadProfilePicture: UploadProfilePicturePayload;
};


export type MutationChangePixelColorArgs = {
  input: ChangePixelColorInput;
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


export type MutationSaveCanvasArgs = {
  input: SaveCanvasInput;
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

export type Query = {
  __typename?: 'Query';
  getCanvas: Array<Canvas_Model>;
  loadCanvas: Scalars['String'];
  me?: Maybe<User>;
  user: Array<User>;
  users?: Maybe<UsersConnection>;
};


export type QueryLoadCanvasArgs = {
  canvas_id: Scalars['String'];
};


export type QueryUserArgs = {
  email: Scalars['String'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<UserSortInput>>;
  where?: InputMaybe<UserFilterInput>;
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

export type SaveCanvasInput = {
  canvas_id: Scalars['String'];
  colors: Scalars['String'];
};

export type SaveCanvasPayload = {
  __typename?: 'SaveCanvasPayload';
  string?: Maybe<Scalars['String']>;
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

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginUserPayload', userResponse?: { __typename?: 'UserResponse', token: string, user: { __typename?: 'User', username: string, userId: any } } | null } };

export type OnPixelChangeSubscriptionVariables = Exact<{
  canvasId: Scalars['String'];
}>;


export type OnPixelChangeSubscription = { __typename?: 'CanvasSubscription', onPixelChange?: { __typename?: 'PixelChangePayload', row: number, col: number, color: string } | null };

export type GetUsersQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetUsersQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes?: Array<{ __typename?: 'User', username: string }> | null } | null };


export const ChangePixelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changePixel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePixelColorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePixelColor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]} as unknown as DocumentNode<ChangePixelMutation, ChangePixelMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userResponse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const OnPixelChangeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnPixelChange"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canvasId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onPixelChange"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"canvasId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canvasId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"row"}},{"kind":"Field","name":{"kind":"Name","value":"col"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<OnPixelChangeSubscription, OnPixelChangeSubscriptionVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;