import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaHome } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-[100vh] sticky top-0 z-10 bg-orange-400 p-4">
        <ul className="space-y-2">
          {isAdmin ? (
            <>
              <li className="bg-green-400 p-2 rounded-md flex items-center gap-2  ">
                <FaHome className="text-xl" />
                <NavLink to={"/dashboard/adminHome"}>Admin Home</NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/addItems"}>Add Items</NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/manageItems"}>Manage Items</NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/manageBookings"}>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/allUsers"}>All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/userHome"}>User Home</NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/reservation"}>Reservation</NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/cart"}>
                  My Cart ({carts.length})
                </NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/addReview"}>Add a Review</NavLink>
              </li>
              <li className="bg-green-400 p-2 rounded-md">
                <NavLink to={"/dashboard/myBookings"}>My Bookings</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          {/* shared navbar */}
          <li className="bg-green-400 p-2 rounded-md">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="bg-green-400 p-2 rounded-md">
            <NavLink to={"/dashboard/cart"}>Menu</NavLink>
          </li>
          <li className="bg-green-400 p-2 rounded-md">
            <NavLink to={"/dashboard/cart"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
