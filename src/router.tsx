import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import {TOKEN} from "./shared";
import Home from "./pages/Home/Home";

const TOKEN_EXISTS = Boolean(localStorage.getItem(TOKEN));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: TOKEN_EXISTS ? <Home /> : <Login />,
      },
      {
        path: "/join",
        element: <Join />,
      },
    ],
  },
]);
export default router;
