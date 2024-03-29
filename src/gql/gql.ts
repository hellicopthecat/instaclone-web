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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation ToggleLikePhoto($toggleLikePhotoId: Int!) {\n    toggleLikePhoto(id: $toggleLikePhotoId) {\n      ok\n      error\n    }\n  }\n": types.ToggleLikePhotoDocument,
    "\n        fragment transLike on Photo {\n          isLiked\n          totalLikes\n        }\n      ": types.TransLikeFragmentDoc,
    "\n  query isMe {\n    seeMyProfile {\n      avatar\n      id\n      userName\n      isMe\n    }\n  }\n": types.IsMeDocument,
    "\n  query seeFeed {\n    seeFeed {\n      owner\n      id\n      file\n      caption\n      isLiked\n      totalLikes\n      comments {\n        payload\n      }\n      totalComments\n      user {\n        userName\n        avatar\n      }\n    }\n  }\n": types.SeeFeedDocument,
    "\n  mutation join(\n    $userName: String!\n    $firstName: String!\n    $email: String!\n    $password: String!\n    $lastName: String\n  ) {\n    createUser(\n      userName: $userName\n      firstName: $firstName\n      email: $email\n      password: $password\n      lastName: $lastName\n    ) {\n      error\n      ok\n    }\n  }\n": types.JoinDocument,
    "\n  mutation login($userName: String!, $password: String!) {\n    login(userName: $userName, password: $password) {\n      token\n      ok\n      error\n    }\n  }\n": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ToggleLikePhoto($toggleLikePhotoId: Int!) {\n    toggleLikePhoto(id: $toggleLikePhotoId) {\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleLikePhoto($toggleLikePhotoId: Int!) {\n    toggleLikePhoto(id: $toggleLikePhotoId) {\n      ok\n      error\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        fragment transLike on Photo {\n          isLiked\n          totalLikes\n        }\n      "): (typeof documents)["\n        fragment transLike on Photo {\n          isLiked\n          totalLikes\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query isMe {\n    seeMyProfile {\n      avatar\n      id\n      userName\n      isMe\n    }\n  }\n"): (typeof documents)["\n  query isMe {\n    seeMyProfile {\n      avatar\n      id\n      userName\n      isMe\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query seeFeed {\n    seeFeed {\n      owner\n      id\n      file\n      caption\n      isLiked\n      totalLikes\n      comments {\n        payload\n      }\n      totalComments\n      user {\n        userName\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query seeFeed {\n    seeFeed {\n      owner\n      id\n      file\n      caption\n      isLiked\n      totalLikes\n      comments {\n        payload\n      }\n      totalComments\n      user {\n        userName\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation join(\n    $userName: String!\n    $firstName: String!\n    $email: String!\n    $password: String!\n    $lastName: String\n  ) {\n    createUser(\n      userName: $userName\n      firstName: $firstName\n      email: $email\n      password: $password\n      lastName: $lastName\n    ) {\n      error\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation join(\n    $userName: String!\n    $firstName: String!\n    $email: String!\n    $password: String!\n    $lastName: String\n  ) {\n    createUser(\n      userName: $userName\n      firstName: $firstName\n      email: $email\n      password: $password\n      lastName: $lastName\n    ) {\n      error\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($userName: String!, $password: String!) {\n    login(userName: $userName, password: $password) {\n      token\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\n  mutation login($userName: String!, $password: String!) {\n    login(userName: $userName, password: $password) {\n      token\n      ok\n      error\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;