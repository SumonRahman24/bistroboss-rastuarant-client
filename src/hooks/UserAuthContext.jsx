import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UserAuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UserAuthContext;
