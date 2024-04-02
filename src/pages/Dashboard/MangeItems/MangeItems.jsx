import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MangeItems = () => {
  const [menu, , refetch] = UseMenu();
  const axiosSecure = useAxiosSecure();

  const handleItemUpdate = (item) => {
    console.log(item);
  };

  const handleItemsDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${item?.name} want to deleted ??`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //
        const res = await axiosSecure.delete(`/menu/${item?._id}`);
        console.log(res.data.deletedCount);
        if (res.data.deletedCount > 0) {
          // refetch
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item?.name} has benn deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle title={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"} />

      <div className="max-w-[992px] mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] border-2 text-gray-50 font-bold text-md">
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <th>
                  <img className="h-20 w-20" src={item?.image} alt="image" />
                </th>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item?._id}`}>
                    <button
                      className="bg-[#D1A054] p-2 rounded-md"
                      onClick={() => handleItemUpdate(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="bg-[#B91C1C] p-2 rounded-md"
                    onClick={() => handleItemsDelete(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 6H5H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 11V17"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 11V17"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeItems;
