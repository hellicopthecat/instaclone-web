import {gql, useQuery} from "@apollo/client";
import Layout from "../../components/Layout";
import {Query} from "../../gql/graphql";
import styled from "styled-components";
import PhotoFeed from "../../components/feed/PhotoFeed";
const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      owner
      id
      file
      caption
      isLiked
      totalLikes
      updatedAt
      createAt
      comments {
        payload
        id
        user {
          id
          userName
          avatar
        }
      }
      totalComments
      user {
        userName
        avatar
      }
    }
  }
`;
const FeedCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Home = () => {
  const {data} = useQuery<Query>(FEED_QUERY);
  return (
    <Layout>
      <FeedCont>
        {data?.seeFeed?.map((feed) => (
          <>
            {feed && (
              <PhotoFeed
                key={feed && feed?.id + feed?.updatedAt}
                id={feed?.id!}
                file={feed?.file + ""}
                isLiked={feed?.isLiked!}
                totalLikes={feed?.totalLikes!}
                caption={feed?.caption!}
                totalComment={feed?.totalComments!}
                comments={feed?.comments as []}
                user={{
                  avatar: feed.user.avatar + "",
                  userName: feed.user.userName + "",
                }}
              />
            )}
          </>
        ))}
      </FeedCont>
    </Layout>
  );
};
export default Home;
