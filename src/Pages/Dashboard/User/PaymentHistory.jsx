import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SheardTitle from "../../../Sheared/SheardTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SheardTitle
        subHeading={"---At a glance!---"}
        heading={"payment history"}
      />
      <div className="bg-white w-11/12 mx-auto">
        <h2 className="text-2xl text-center text-purple-400 mb-2">
          Total Users : {payments.length}
        </h2>
        <table className="table w-full table-zebra ">
          <thead>
            <tr className=" text-base font-semibold bg-amber-400">
              <th>Index</th>
              <th>Email</th>
              <th>transactionId</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="flex items-center gap-2">{user.email}</td>
                <td>{user.transactionId}</td>

                <td className="flex items-center gap-2 font-semibold">
                  {user?.price}$
                </td>
                <td>{user?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
