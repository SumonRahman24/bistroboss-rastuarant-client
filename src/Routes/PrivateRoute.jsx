import { Navigate, useLocation } from "react-router-dom";
import UserAuthContext from "../hooks/UserAuthContext";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UserAuthContext();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
