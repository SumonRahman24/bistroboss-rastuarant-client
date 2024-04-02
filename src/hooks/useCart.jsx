import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UserAuthContext from "./UserAuthContext";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UserAuthContext();
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [carts, refetch];
};

export default useCart;
