import React from "react";
import SheardTitle from "../../Sheared/SheardTitle";
import useCart from "../../hooks/useCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <SheardTitle subHeading={"---My Cart---"} heading={"Wanna add more?"} />

      <div className="w-11/12 mx-auto bg-slate-200 p-6">
        <div className="flex flex-wrap items-center text-center  justify-between  font-serif">
          <h2 className="text-2xl md:text-3xl ">
            Total Orders: {cart.length}$
          </h2>
          <h3 className="text-2xl md:text-3xl ">Total Price : {totalPrice}$</h3>
          <button className="btn btn-outline uppercase  bg-yellow-300 ">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto my-4">
          <table className="table">
            {/* head */}
            <thead className="bg-amber-300 ">
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
                    <button className="btn btn-ghost  btn-md ">
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
  );
};

export default Cart;
