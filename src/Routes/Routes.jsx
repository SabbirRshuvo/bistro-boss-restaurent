import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import OurMenu from "../Pages/HomePage/OurMenu";
import Login from "../Pages/HomePage/Login";
import Home from "../Pages/HomePage/Home";
import OurShop from "../Pages/HomePage/OurShop";
import ContactUs from "../Pages/HomePage/ContactUs";
import Register from "../Pages/HomePage/Register";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: "error",
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
