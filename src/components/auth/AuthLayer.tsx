import styled from "styled-components";
import {Container} from "../../styles/styles";
import {ReactNode} from "react";

const AuthLayerCont = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthLayer: React.FC<{children: ReactNode}> = ({children}) => {
  return <AuthLayerCont>{children}</AuthLayerCont>;
};
export default AuthLayer;
