import styled from "styled-components";

export const LoginFormCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  h2 {
    grid-column: span 2;
  }
`;
export const LoginFormImg = styled.div`
  grid-row: span 3;
`;
export const SocialLoginCont = styled.div``;
export const SignUpCont = styled.div`
  border-top: 1px solid rgb(215, 215, 215);
  width: 100%;
  grid-column: span 2;
  padding-top: 20px;
  background-color: white;
`;
