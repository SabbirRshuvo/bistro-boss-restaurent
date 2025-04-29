import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import OurMenu from "../Pages/HomePage/OurMenu";
import Login from "../Pages/HomePage/Login";
import Home from "../Pages/HomePage/Home";
import OurShop from "../Pages/HomePage/OurShop";
import ContactUs from "../Pages/HomePage/ContactUs";
import Register from "../Pages/HomePage/Register";
import Dashboard from "../MainLayout/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Cart from "../Pages/Dashboard/Admin/Cart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AddItems from "../Pages/Dashboard/Admin/AddItems";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import UpdateMenuItem from "../Pages/Dashboard/Admin/UpdateMenuItem";
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
        path: "menu",
        element: <OurMenu />,
      },
      {
        path: "our_shop",
        element: <OurShop />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: "error",
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },

      {
        path: "manage-bookings",
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updatedItem/:id",
        element: (
          <AdminRoute>
            <UpdateMenuItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/menu/${params.id}`),
      },
    ],
  },
]);

export default routes;
