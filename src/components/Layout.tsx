import {ReactNode} from "react";
import Header from "./main/header";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
