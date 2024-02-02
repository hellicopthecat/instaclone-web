/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  createAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  owner: Scalars['Boolean']['output'];
  payload: Scalars['String']['output'];
  photo: Photo;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type CreateAccountResult = {
  __typename?: 'CreateAccountResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateCommentResult = {
  __typename?: 'CreateCommentResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteCommentResult = {
  __typename?: 'DeleteCommentResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeletePhotoResult = {
  __typename?: 'DeletePhotoResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditPhotoResult = {
  __typename?: 'EditPhotoResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type FollowUserResult = {
  __typename?: 'FollowUserResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createAt: Scalars['String']['output'];
  hashtag: Scalars['String']['output'];
  id: Scalars['String']['output'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalPhoto: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};


export type HashtagPhotosArgs = {
  page: Scalars['Int']['input'];
};

export type Like = {
  __typename?: 'Like';
  createAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  photo: Photo;
  updatedAt: Scalars['String']['output'];
};

export type Message = {
  __typename?: 'Message';
  createAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  payload: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  room: Room;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CreateCommentResult;
  createUser: CreateAccountResult;
  deleteComment: DeleteCommentResult;
  deletePhoto: DeletePhotoResult;
  editComment: EditCommentResult;
  editPhoto?: Maybe<EditPhotoResult>;
  editProfile: EditResult;
  followUser?: Maybe<FollowUserResult>;
  login: LoginResult;
  readMessage: MutationResponse;
  sendMessage: MutationResponse;
  toggleLikePhoto?: Maybe<ToggleLikePhotoResult>;
  unFollowUser?: Maybe<UnfollowUserResult>;
  uploadPhoto?: Maybe<Photo>;
};


export type MutationCreateCommentArgs = {
  payload: Scalars['String']['input'];
  photoId: Scalars['Int']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditCommentArgs = {
  id: Scalars['Int']['input'];
  payload: Scalars['String']['input'];
};


export type MutationEditPhotoArgs = {
  caption: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type MutationEditProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFollowUserArgs = {
  userName: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationReadMessageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSendMessageArgs = {
  payload: Scalars['String']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationToggleLikePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUnFollowUserArgs = {
  userName: Scalars['String']['input'];
};


export type MutationUploadPhotoArgs = {
  caption?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Photo = {
  __typename?: 'Photo';
  caption?: Maybe<Scalars['String']['output']>;
  comments: Scalars['Int']['output'];
  createAt: Scalars['String']['output'];
  file: Scalars['String']['output'];
  hashtags?: Maybe<Array<Maybe<Hashtag>>>;
  id: Scalars['String']['output'];
  owner: Scalars['Boolean']['output'];
  totalLikes: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  searchPhotos?: Maybe<Array<Maybe<Photo>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  seeFeed?: Maybe<Array<Maybe<Photo>>>;
  seeFollowers: SeeFollowersResult;
  seeFollowing: SeeFollowingResult;
  seeHashtag?: Maybe<Hashtag>;
  seePhoto?: Maybe<Photo>;
  seePhotoComments?: Maybe<Array<Maybe<Comment>>>;
  seePhotoLikes?: Maybe<Array<Maybe<User>>>;
  seeRoom?: Maybe<Array<Maybe<Room>>>;
  user?: Maybe<User>;
};


export type QuerySearchPhotosArgs = {
  keyword: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String']['input'];
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int']['input'];
  userName: Scalars['String']['input'];
};


export type QuerySeeFollowingArgs = {
  lastId?: InputMaybe<Scalars['Int']['input']>;
  userName: Scalars['String']['input'];
};


export type QuerySeeHashtagArgs = {
  hashtags: Scalars['String']['input'];
};


export type QuerySeePhotoArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySeePhotoCommentsArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeRoomArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  userName: Scalars['String']['input'];
};

export type Room = {
  __typename?: 'Room';
  createAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  messages?: Maybe<Array<Maybe<Message>>>;
  unReadTotal: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  roomUpdates?: Maybe<Message>;
};


export type SubscriptionRoomUpdatesArgs = {
  id: Scalars['Int']['input'];
};

export type UnfollowUserResult = {
  __typename?: 'UnfollowUserResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['Upload']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  follower?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['Int']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isMe: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalFollowers: Scalars['Int']['output'];
  totalFollowing: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};


export type UserAvatarArgs = {
  file: Scalars['Upload']['input'];
};

export type EditCommentResult = {
  __typename?: 'editCommentResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditResult = {
  __typename?: 'editResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type LoginResult = {
  __typename?: 'loginResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type SeeFollowersResult = {
  __typename?: 'seeFollowersResult';
  error?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<Maybe<User>>>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SeeFollowingResult = {
  __typename?: 'seeFollowingResult';
  error?: Maybe<Scalars['String']['output']>;
  following?: Maybe<Array<Maybe<User>>>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ToggleLikePhotoResult = {
  __typename?: 'toggleLikePhotoResult';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type LoginMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'loginResult', token?: string | null, ok: boolean, error?: string | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;