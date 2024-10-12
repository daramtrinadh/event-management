import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("eventtoken");
  return token ? children : <Navigate to='/auth' />;
};
export default ProtectedRoute;
