import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import OurMenu from "../Pages/OurMenu";
import Home from "../Pages/Home";
import OurShop from "../Pages/OurShop";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Secret from "../PrivateRoute/Secret";

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
      {
        path: "/our_shop",
        element: <OurShop />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
