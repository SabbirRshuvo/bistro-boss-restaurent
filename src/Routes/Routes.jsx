import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Home from "../Components/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
