import React from "react";
import UseMenu from "../hooks/UseMenu";
import MenuItem from "../Sheared/MenuItem";
import desertImg from "../assets/menu/dessert-bg.jpeg";
const DesertMenu = () => {
  const [menu] = UseMenu();
  const desertMenu = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <div className="w-full relative h-[500px] overflow-hidden justify-center flex items-center">
        <img
          src={desertImg}
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="relative text-center items-center justify-center flex w-4/5 h-1/3 bg-black/40 flex-col text-white">
          <h2 className="text-3xl uppercase font-thin md:text-2xl ">Desert</h2>
          <p className="text-sm opacity-90">
            A desert is a vast area of dry, barren land. Deserts are either hot
            or cold environments with relatively little rainfall throughout the
            year.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {desertMenu.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="mt-16 items-center text-center justify-center">
          <button className="btn btn-outline border-0 border-b-2 border-yellow-500 bg-white text-black uppercase">
            order your favourite food
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesertMenu;
