/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ element, adminOnly = false }) => {
  const { isLogged, isAdmin, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;

