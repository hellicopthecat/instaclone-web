import styled from "styled-components";
import Avatar from "../Avatar";
import {MutationUpdaterFn, gql, useMutation} from "@apollo/client";
import FeedComment from "./FeedComment";

const PhotoContainer = styled.div`
  width: 100%;
  border: 1px solid #000;
  max-width: 615px;
`;
const PhotoHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  img {
    border: 1px solid #000;
    border-radius: 100%;
    padding: 5px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;
const PhotoFile = styled.img`
  padding: 20px;
  min-width: 100%;
`;
const PhotoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const PhotoAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const PhotoActionIcon = styled.div`
  display: flex;
  gap: 5px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
const PhotoLikeCont = styled.div`
  font-weight: 700;
`;
const PhotoAddComments = styled.div``;

interface IPhotoFeed {
  id: number;
  file: string;
  isLiked: boolean;
  totalLikes: number;
  caption?: string;
  totalComment: number;
  comments: {
    payload: string;
    id: number;
    user: {
      id: number;
      userName: string;
      avatar: string;
    };
  }[];
  user: {
    userName: string;
    avatar: string;
  };
}

const TOGGLE_LIKE = gql`
  mutation ToggleLikePhoto($toggleLikePhotoId: Int!) {
    toggleLikePhoto(id: $toggleLikePhotoId) {
      ok
      error
    }
  }
`;

const PhotoFeed: React.FC<IPhotoFeed> = ({
  id,
  file,
  isLiked,
  totalLikes,
  caption,
  totalComment,
  comments,
  user,
}) => {
  const updateToggleLike: MutationUpdaterFn = (cache, result) => {
    const {ok} = result.data?.toggleLikePhoto;
    if (ok) {
      const fragmentId = `Photo:${id}`;
      const fragment = gql`
        fragment transLike on Photo {
          isLiked
          totalLikes
        }
      `;

      cache.writeFragment({
        id: fragmentId,
        fragment,
        data: {
          isLiked: !isLiked,
          totalLikes: isLiked ? totalLikes - 1 : totalLikes + 1,
        },
      });
    }
  };
  const [toggleLikePhoto] = useMutation(TOGGLE_LIKE, {
    variables: {toggleLikePhotoId: id},
    update: updateToggleLike,
  });
  return (
    <PhotoContainer>
      <PhotoHeader>
        <Avatar url={user.avatar + ""} />
        <span>{user.userName}</span>
      </PhotoHeader>
      <PhotoFile src={file} alt={id + ""} />
      <PhotoInfo>
        <PhotoAction>
          <PhotoActionIcon>
            <button onClick={() => toggleLikePhoto()}>
              {isLiked ? (
                <svg
                  fill="red"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}
            </button>
            <svg
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
            <svg
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </PhotoActionIcon>
          <PhotoActionIcon>
            <svg
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </PhotoActionIcon>
        </PhotoAction>
        <PhotoLikeCont>
          <p>
            {totalLikes! > 1 ? `${totalLikes} likes` : `${totalLikes} like`}
          </p>
        </PhotoLikeCont>
        <FeedComment
          caption={caption}
          userName={user.userName}
          totalComment={totalComment}
          comments={comments}
        />
        <PhotoAddComments></PhotoAddComments>
      </PhotoInfo>
    </PhotoContainer>
  );
};
export default PhotoFeed;
