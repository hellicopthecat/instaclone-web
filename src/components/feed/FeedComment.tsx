import styled from "styled-components";
import {FatText} from "../shared";

const PhotoComments = styled.div`
  margin: 10px 0;
`;
const CommentInfoCont = styled.div`
  margin: 10px 0 30px;
`;
const CommentCountCont = styled.div`
  margin: 10px 0;
`;
const CommentCont = styled.div`
  margin: 2px 0;
`;

interface IFeedComment {
  caption?: string | null;
  userName: string;
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
}
const FeedComment: React.FC<IFeedComment> = ({
  caption,
  userName,
  totalComment,
  comments,
}) => {
  return (
    <PhotoComments>
      {caption === null ? null : (
        <CommentInfoCont>
          <FatText txt={userName} />
          <span>{caption}</span>
        </CommentInfoCont>
      )}
      <CommentCountCont>
        {totalComment === 1 ? (
          <FatText txt="1 Comment" />
        ) : totalComment > 1 ? (
          <FatText txt={`${totalComment} Comments `} />
        ) : (
          <FatText txt="0 Comment" />
        )}
      </CommentCountCont>
      {comments.map((comment) => (
        <CommentCont key={comment.id}>
          <FatText txt={comment.user.userName} />
          <span>{comment.payload}</span>
        </CommentCont>
      ))}
    </PhotoComments>
  );
};
export default FeedComment;
