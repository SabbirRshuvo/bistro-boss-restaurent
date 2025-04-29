import React from "react";
import SheardTitle from "../../../Sheared/SheardTitle";
import UseMenu from "../../../hooks/UseMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
const ManageItems = () => {
  const [menu, , refetch] = UseMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <SheardTitle subHeading={"---Hurry Up---"} heading={"Manage all items"} />
      <div className="bg-white w-11/12 mx-auto">
        <h2 className="text-2xl text-center text-purple-400 mb-2">
          Total Users : {menu.length}
        </h2>
        <table className="table w-full table-zebra ">
          <thead>
            <tr className=" text-base font-semibold bg-amber-400 uppercase">
              <th></th>
              <th>item image</th>
              <th>item name</th>
              <th>price</th>
              <th>action</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-100 transition-all">
                <td className="py-4 px-2 text-center font-semibold">
                  {index + 1}
                </td>

                <td className="py-4 px-2">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>

                <td className="py-4 px-2">
                  <div className="flex items-center gap-2 font-medium">
                    {item.name}
                  </div>
                </td>

                <td className="py-4 px-2 text-center font-semibold">
                  ${parseFloat(item.price).toFixed(2)}
                </td>

                <td className="py-4 px-2 text-center">
                  <Link to={`/dashboard/updatedItem/${item._id}`}>
                    <button
                      className="cursor-pointer text-blue-500 hover:text-blue-700 text-lg"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                  </Link>
                </td>

                <td className="py-4 px-2 text-center">
                  <button
                    onClick={() => handleDelete(item)}
                    className="cursor-pointer bg-red-500 hover:bg-red-600 text-white p-2 rounded-full text-lg transition-all"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
