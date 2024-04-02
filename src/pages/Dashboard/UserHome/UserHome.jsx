import UserAuthContext from "../../../hooks/UserAuthContext";

const UserHome = () => {
  const { user } = UserAuthContext();

  return <div>Welcom to {user?.displayName}</div>;
};

export default UserHome;
