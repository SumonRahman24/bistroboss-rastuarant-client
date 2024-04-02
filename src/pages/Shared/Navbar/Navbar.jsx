import { Link, NavLink } from "react-router-dom";
import UseTheme from "../../../hooks/UseTheme";
import UserAuthContext from "./../../../hooks/UserAuthContext";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "./../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = UserAuthContext();
  const { mode, changeTheme } = UseTheme();
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout successfully");
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contactUs"}>contact us</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to={"/dashboard/adminHome"}>dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to={"/dashboard/userHome"}>Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/menu"}>our menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/cart"}>
          <button className="btn">
            <FaShoppingCart className="text-2xl" />
            <div className="badge badge-secondary">+{carts.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className=" bg-black fixed z-10 bg-opacity-20 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-white">
            <h2 className="uppercase font-extrabold text-xl font-cinzel">
              bistro boss
            </h2>
            <p className="tracking-[.27em] font-cinzel">Restaurant</p>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button onClick={changeTheme} className="text-white btn btn-primary">
            {mode === "light" ? "Dark" : "Light"}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium  flex-col p-4 md:p-0 mt-4 border text-white uppercase border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700 flex items-center">
              {navOptions}
            </ul>
          </div>
          {user ? (
            <details className="dropdown">
              <summary className="m-1 btn">open or close</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li className="font-bold">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </details>
          ) : (
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
