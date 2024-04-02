import { useForm } from "react-hook-form";
import authenticationImg from "../../assets/others/authentication2.png";
import UserAuthContext from "../../hooks/UserAuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { signUp, updateUserProfile } = UserAuthContext();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("loggedUser", loggedUser);

      // update user profile
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          console.log("update user info");
        })
        .catch((error) => console.log(error.message));

      // setup user entry in database
      const userInfo = {
        name: data.name,
        email: data.email,
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log("user added to the database");

        console.log("rrr", res.data);

        if (res.data.insertedId) {
          // reset
          reset();

          // alert
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Register Successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          // navigate
          navigate("/login");
        }
      });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl shadow-slate-600 p-10">
          <div className="text-center lg:text-left">
            <img src={authenticationImg} alt="authentication image" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-3xl font-bold text-center pt-5">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-400 font-bold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  name="name"
                  {...register("photoUrl", { required: true })}
                />
                {errors.photoUrl && (
                  <span className="text-red-400 font-bold">
                    photoUrl is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400 font-bold">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password && (
                  <span className="text-red-400 font-bold">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400 font-bold">
                    Password must have 6 character
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-400 font-bold">
                    Password must have less than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-400 font-bold">
                    Password must have one uppercase, one special character, one
                    lowercase, one number
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <div>
              <SocialLogin />
            </div>
            <div>
              <p>
                already register? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
