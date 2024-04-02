import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("access-token", {
            headers: {
              Authorization: `barer ${localStorage.getItem("access-token")}`,
            },
          })}`,
        },
      });
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            // refetch
            refetch();

            // sweet alert
            Swal.fire({
              title: "updated success!",
              text: `${user?.name} is make admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUserDelete = (id) => {
    console.log("iddd", id);

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // refetch
            refetch();

            // sweet alert
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-lg">All Users</h2>
        <h2 className="text-lg">total {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <th>{user.name}</th>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button onClick={() => handleMakeAdmin(user)}>
                        Make a admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleUserDelete(user?._id)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
