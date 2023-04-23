import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const AdminRoute = ({ children }) => {
  const { isAdmin } = useContext(AuthContext);
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  if (token && isAdmin) {
    return children;
  }

  return <Navigate to="/profile" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
