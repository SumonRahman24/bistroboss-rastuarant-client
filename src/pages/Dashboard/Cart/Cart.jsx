import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, refetch] = useCart();
  const price = carts.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data.deletedCount);
          if (res.data.deletedCount > 0) {
            // refetch
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex  justify-center mt-10 gap-16">
        <h2 className="text-xl ">Item: {carts.length}</h2>
        <h2 className="text-xl ">Total Price: ${price}</h2>
        {carts.length ? (
          <Link to={"/dashboard/payment"}>
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Price</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.price}</td>
                  <td>Purple</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
