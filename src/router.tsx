import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import {TOKEN} from "./shared";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: Boolean(localStorage.getItem(TOKEN)) ? <Home /> : <Login />,
      },
      {
        path: "/join",
        element: <Join />,
      },
    ],
  },
]);
export default router;
