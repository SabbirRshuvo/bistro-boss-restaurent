import React from "react";
import SheardTitle from "../Sheared/SheardTitle";
import saladbg from "../assets/menu/salad-bg.jpg";
import pizza from "../assets/menu/pizza-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";
const Recomended = () => {
  return (
    <div>
      <SheardTitle
        subHeading={"---Should Try---"}
        heading={"chef recommends "}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="card bg-base-100 w-96 shadow-sm border">
          <figure>
            <img src={saladbg} alt="salad" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl uppercase">Salad</h2>
            <p className="text-sm opacity-90">
              Salad is the best testing vagetable in this restarurent.If you
              want to test it, i can provide you
            </p>
            <div className="card-actions justify-center">
              <button className="btn border-0 border-b-2 border-yellow-400 text-white btn-outline">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm border">
          <figure>
            <img src={pizza} alt="salad" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl uppercase">Pizza</h2>
            <p className="text-sm opacity-90">
              Pizza is the best testing Pizza in this restarurent.If you want to
              test it, i can provide you
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-2 border-yellow-400 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm border">
          <figure>
            <img src={soup} alt="salad" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl uppercase">Soup</h2>
            <p className="text-sm opacity-90">
              Soup is the best testing Soup in this restarurent.If you want to
              test it, i can provide you
            </p>
            <div className="card-actions justify-center">
              <button className="btn border-0 border-b-2 border-yellow-400 text-white btn-outline">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recomended;
