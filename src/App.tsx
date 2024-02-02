import {Outlet} from "react-router-dom";
import {GlobalStyle, theme} from "./styles/styles";
import {ThemeProvider} from "styled-components";
import {HelmetProvider} from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
