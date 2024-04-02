import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseMenu = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default UseMenu;
