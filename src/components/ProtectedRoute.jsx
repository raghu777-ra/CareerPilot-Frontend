import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

function ProtectedRoute({ children, requiredRole }) {

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    const role = localStorage.getItem("role");

    if (role !== requiredRole) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;