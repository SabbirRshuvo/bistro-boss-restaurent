import React from "react";
import UseMenu from "../hooks/UseMenu";
import MenuItem from "../Sheared/MenuItem";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import { Link } from "react-router";
const PizzaMenu = () => {
  const [menu] = UseMenu();
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  return (
    <div className="my-6 md:my-12">
      <div className="w-full relative h-[500px] overflow-hidden justify-center flex items-center text-white">
        <img
          src={pizzaImg}
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="relative text-center items-center justify-center flex w-4/5 h-1/3 bg-black/40 flex-col">
          <h2 className="text-3xl uppercase font-thin md:text-2xl ">Pizza</h2>
          <p className="text-sm opacity-90">
            A Pizza is a vast area of dry, barren land. Pizzas are either hot or
            cold environments with relatively little rainfall throughout the
            year.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {pizzaMenu.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="mt-16 items-center text-center justify-center">
          <Link
            to="/our_shop"
            className="btn btn-outline border-0 border-b-2 border-yellow-500  text-black uppercase"
          >
            order your favourite food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
