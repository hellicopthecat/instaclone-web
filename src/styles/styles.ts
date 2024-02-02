import styled, {DefaultTheme, createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export const theme: DefaultTheme = {
  dark: {},
  light: {},
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    input{
      border:1px solid rgba(0,0,0,0.1);
      border-radius:5px;
    }
    button{
      border:none;
      border-radius:5px;
      background-color:inherit;
      cursor: pointer;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(215, 215, 215);
`;
export const Wrapper = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
