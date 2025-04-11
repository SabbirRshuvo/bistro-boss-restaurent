import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <>
      <div className="mt-8 md:flex space-x-4 flex flex-col  items-center justify-center text-center px-6">
        <div>
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className=""
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <h3 className="text-xl font-semibold mt-4 ">{name}-------</h3>
          <p className="opacity-90 text-sm">{recipe}</p>
        </div>
        <p className="text-yellow-300 font-semibold text-md">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
