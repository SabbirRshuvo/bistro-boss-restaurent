import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import OurMenu from "../Pages/OurMenu";
import Home from "../HomeComponents/Home";

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
      {
        path: "/menu",
        element: <OurMenu />,
      },
    ],
  },
]);

export default routes;
