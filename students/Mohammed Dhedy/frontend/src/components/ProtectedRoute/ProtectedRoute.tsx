import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const auth = useAuth();
  const { isAuthenticated } = auth;

  if (isAuthenticated) return children;
  else return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
