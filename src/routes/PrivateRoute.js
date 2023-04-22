import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isError } = useContext(AuthContext);
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  if (!token && isError) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
