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

export type DeleteUserInput = {
  email: Scalars['String'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  userResponse?: Maybe<UserResponse>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserPayload = {
  __typename?: 'LoginUserPayload';
  string?: Maybe<Scalars['String']>;
};

export type RefreshUserPayload = {
  __typename?: 'RefreshUserPayload';
  string?: Maybe<Scalars['String']>;
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

export type UpdateUsernameInput = {
  email: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateUsernamePayload = {
  __typename?: 'UpdateUsernamePayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type UploadProfilePictureInput = {
  file: Scalars['Upload'];
  userId: Scalars['UUID'];
};

export type UploadProfilePicturePayload = {
  __typename?: 'UploadProfilePicturePayload';
  userResponse?: Maybe<UserResponse>;
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

export type UserMutation = {
  __typename?: 'UserMutation';
  deleteUser: DeleteUserPayload;
  loginUser: LoginUserPayload;
  refreshUser: RefreshUserPayload;
  registerUser: RegisterUserPayload;
  updateUsername: UpdateUsernamePayload;
  uploadProfilePicture: UploadProfilePicturePayload;
};


export type UserMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type UserMutationLoginUserArgs = {
  input: LoginUserInput;
};


export type UserMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type UserMutationUpdateUsernameArgs = {
  input: UpdateUsernameInput;
};


export type UserMutationUploadProfilePictureArgs = {
  input: UploadProfilePictureInput;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type UserQueryUserArgs = {
  email: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum UserRole {
  Admin = 'ADMIN',
  PremiumUser = 'PREMIUM_USER',
  User = 'USER'
}

export type UserSubscription = {
  __typename?: 'UserSubscription';
  onUserUpdate: User;
};

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'UserMutation', registerUser: { __typename?: 'RegisterUserPayload', userResponse?: { __typename?: 'UserResponse', error?: string | null, user?: { __typename?: 'User', userId: any } | null } | null } };

export type UploadProfilePictureMutationVariables = Exact<{
  input: UploadProfilePictureInput;
}>;


export type UploadProfilePictureMutation = { __typename?: 'UserMutation', uploadProfilePicture: { __typename?: 'UploadProfilePicturePayload', userResponse?: { __typename?: 'UserResponse', error?: string | null, user?: { __typename?: 'User', username: string } | null } | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'UserQuery', users: Array<{ __typename?: 'User', email: string, username: string }> };


export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userResponse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const UploadProfilePictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadProfilePICTURE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadProfilePictureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadProfilePicture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userResponse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;