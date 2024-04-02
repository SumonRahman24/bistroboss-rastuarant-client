import { useQuery } from "@tanstack/react-query";
import UserAuthContext from "./UserAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = UserAuthContext();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin = [], isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data.admin;
      }
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
