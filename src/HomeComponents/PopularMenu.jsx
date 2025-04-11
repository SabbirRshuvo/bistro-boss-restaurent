import React, { useEffect, useState } from "react";
import SheardTitle from "../Sheared/SheardTitle";
import MenuItem from "../Sheared/MenuItem";
import UseMenu from "../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const PopularMenu = menu.filter((item) => item.category === "popular");
  return (
    <>
      <div>
        <SheardTitle
          subHeading={"---Check it out---"}
          heading={"From our menu"}
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {PopularMenu.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-16 items-center text-center justify-center">
        <button className="btn btn-outline border-0 border-b-2 border-black bg-white text-black uppercase">
          View full menu
        </button>
      </div>
    </>
  );
};

export default PopularMenu;
