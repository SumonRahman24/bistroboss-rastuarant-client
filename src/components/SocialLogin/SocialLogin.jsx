import { useNavigate } from "react-router-dom";
import UserAuthContext from "../../hooks/UserAuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = UserAuthContext();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleGoogle}>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
