import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseMenu = () => {
  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/menu`);
      return res.data;
    },
  });
  return [menu, loading, refetch];
};

export default UseMenu;
