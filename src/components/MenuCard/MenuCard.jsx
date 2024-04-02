import { PropTypes } from "prop-types";
import UserAuthContext from "./../../hooks/UserAuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const MenuCard = ({ item }) => {
  const { image, name, recipe, _id, price } = item || {};
  const { user } = UserAuthContext();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      // setup post method

      const cartItem = {
        menuId: _id,
        email: user.email,
        image,
        name,
        recipe,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} is added in your cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login first for add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          //navigate
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-5">
      <div className="max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-full" src={image} alt="Menu Image" />
        </a>
        <div className="p-5 flex justify-between flex-col">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name.slice(0, 20)}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {recipe.slice(0, 50)}
          </p>
          <div>
            <button
              onClick={() => handleAddToCart(item)}
              className="inline-flex items-center uppercase px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuCard;
