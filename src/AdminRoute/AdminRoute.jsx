import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <p>Loading.....</p>;
  }
  if (user && isAdmin) {
    return children;
  }
  <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
