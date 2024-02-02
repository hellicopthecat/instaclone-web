import {Link} from "react-router-dom";
import styled from "styled-components";

const Paragraph = styled.p`
  text-align: center;
  span {
    margin-right: 10px;
  }
`;
interface ILinkText {
  para?: string;
  linkUrl?: string;
  linkDesc?: string;
}
const BottomText: React.FC<ILinkText> = ({para, linkUrl, linkDesc}) => {
  return (
    <Paragraph>
      {para && para?.length > 0 ? <span>{para}</span> : null}
      {linkUrl && linkUrl?.length > 0 ? (
        <Link to={linkUrl}>{linkDesc}</Link>
      ) : null}
    </Paragraph>
  );
};
export default BottomText;
