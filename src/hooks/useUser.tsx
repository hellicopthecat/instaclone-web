import {gql, useQuery, useReactiveVar} from "@apollo/client";
import {isLoggedInUser, logOutUser} from "../apollo";
import {useEffect} from "react";
import {Query} from "../gql/graphql";
const MYPR_QUERY = gql`
  query isMe {
    seeMyProfile {
      avatar
      id
      userName
      isMe
    }
  }
`;
const useUser = () => {
  const hasToken = useReactiveVar(isLoggedInUser);
  const {data, error} = useQuery<Query>(MYPR_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    if (error && data === undefined) {
      console.log(error);
      logOutUser();
    }
  }, [data, error]);
  useEffect(() => {
    console.log(hasToken);
  }, [hasToken]);
  return {data};
};
export default useUser;
