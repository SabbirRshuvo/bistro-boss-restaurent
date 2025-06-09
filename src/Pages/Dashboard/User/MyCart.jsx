import React from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../../../hooks/useCart";
import SheardTitle from "../../../Sheared/SheardTitle";
import { Link } from "react-router";

const MyCart = () => {
  const [, refetch] = useCart();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
        axios
          .delete(`${import.meta.env.VITE_API_URL}/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <>
      {cart.length ? (
        <div>
          <SheardTitle
            subHeading={"---My Cart---"}
            heading={"Wanna add more?"}
          />

          <div className="w-11/12 mx-auto bg-slate-200 p-6">
            <div className="flex flex-wrap items-center text-center  justify-between  font-serif">
              <h2 className="text-2xl md:text-3xl ">
                Total Orders: {cart.length}
              </h2>
              <h3 className="text-2xl md:text-3xl ">
                Total Price : {totalPrice}$
              </h3>
              <Link to="/dashboard/user-reservation">
                <button className="btn  uppercase  bg-red-300 btn-link">
                  Pay
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto my-4">
              <table className="table">
                {/* head */}
                <thead className="bg-green-300 ">
                  <tr>
                    <th></th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cart.map((item, index) => (
                    <tr key={item._id}>
                      <td className="text-md font-semibold">{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="rounded-full h-12 w-12">
                              <img
                                className="object-cover"
                                src={item.image}
                                alt="User"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h3 className="text-md font-semibold">{item.name}</h3>
                      </td>
                      <td>
                        <span className="text-md font-semibold ">
                          ${item.price}
                        </span>
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-ghost  btn-md "
                        >
                          <MdDelete className="text-2xl" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="justify-center h-screen flex items-center ">
          <p className="font-serif">No data found</p>
        </div>
      )}
    </>
  );
};

export default MyCart;
