import { Navigate, useLocation } from "react-router-dom";
import UserAuthContext from "../hooks/UserAuthContext";
import { PropTypes } from "prop-types";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = UserAuthContext();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
