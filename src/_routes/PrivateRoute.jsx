import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const user = useSelector((state) => state?.loginInfo);
  return user?.email ? children : <Navigate to="/" from="*" />;
};
