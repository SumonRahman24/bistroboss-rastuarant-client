import { useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import UserAuthContext from "../../hooks/UserAuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { login } = UserAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    // stop autoReload
    e.preventDefault();

    // get inputField
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) =>
        toast.error(error.message, {
          position: "top-center",
        })
      );
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      console.log("on btn");
      setDisable(false);
    } else {
      setDisable(true);
      console.log("off btn");
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row shadow-2xl shadow-slate-600 p-10">
          <div className="text-center lg:text-left">
            <img className="h-96" src={loginImg} alt="authentication image" />
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <h2 className="text-3xl font-bold text-center pt-5">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                />
                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-sm btn-outline mt-1"
                >
                  Validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer className="custom-toast-container" />
    </>
  );
};

export default Login;
