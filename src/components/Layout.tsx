import {ReactNode} from "react";
import Header from "./main/header";
import styled from "styled-components";
const LayoutBody = styled.main`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;
const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <>
      <Header />
      <LayoutBody>{children}</LayoutBody>
    </>
  );
};
export default Layout;
