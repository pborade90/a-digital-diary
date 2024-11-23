import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { currentUser } = useAuth();

  // If no user is logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If the user's role is not allowed, redirect to dashboard
  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/dashboard" />;
  }

  // If the user's role is allowed, render the child components
  return children;
};

export default ProtectedRoute;
