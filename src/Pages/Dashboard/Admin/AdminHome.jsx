import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = axiosSecure.get("/stats-admin");
      return (await res).data;
    },
  });
  console.log(stats);
  return (
    <div>
      <h2>{stats.menuItem}</h2>
      <h3>{stats.orders}</h3>
      <h4>{stats.users}</h4>
      <p>{stats.revenue}</p>
    </div>
  );
};

export default AdminHome;
