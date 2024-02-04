import styled from "styled-components";
import {Wrapper} from "../../styles/styles";
import useUser from "../../hooks/useUser";
import {useReactiveVar} from "@apollo/client";
import {isLoggedInUser, logOutUser} from "../../apollo";
import Avatar from "../Avatar";
import {Link} from "react-router-dom";
import {routerName} from "../../shared";

const HeaderCont = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const HeaderWrapper = styled(Wrapper)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    img {
      width: 30px;
    }
    svg {
      width: 30px;
    }
  }
`;
const IsLoggedInCont = styled.div`
  gap: 20px;
`;
const LoginBtn = styled.button`
  background-color: cornflowerblue;
  color: white;
  padding: 10px 20px;
`;
const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInUser);
  const {data} = useUser();
  return (
    <HeaderCont>
      <HeaderWrapper>
        <div>
          <Link to={routerName.home}>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
        </div>
        {isLoggedIn ? (
          <IsLoggedInCont>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <Avatar url={data?.seeMyProfile.avatar + ""} alt="아바타이미지" />
          </IsLoggedInCont>
        ) : (
          <LoginBtn
            onClick={() => {
              logOutUser();
            }}
          >
            로그인
          </LoginBtn>
        )}
      </HeaderWrapper>
    </HeaderCont>
  );
};
export default Header;
