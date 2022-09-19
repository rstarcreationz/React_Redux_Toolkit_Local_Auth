import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state?.loginInfo);
  return user?.email ? <Navigate to="/dashboard" from="*" /> : children;
};
