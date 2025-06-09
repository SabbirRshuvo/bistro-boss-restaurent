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
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AddItems from "../Pages/Dashboard/Admin/AddItems";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import UpdateMenuItem from "../Pages/Dashboard/Admin/UpdateMenuItem";
import MyCart from "../Pages/Dashboard/User/MyCart";
import UserHome from "../Pages/Dashboard/User/UserHome";
import UserReservation from "../Pages/Dashboard/User/UserReservation";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";
import AddReview from "../Pages/Dashboard/User/AddReview";
import MyBookings from "../Pages/Dashboard/User/MyBookings";
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
          fetch(
            `https://bistro-boss-restaurent-server-nine.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "user-reservation",
        element: <UserReservation />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "my-booking",
        element: <MyBookings />,
      },
    ],
  },
]);

export default routes;
