import React from "react";

const SheardTitle = ({ heading, subHeading }) => {
  return (
    <div className="items-center text-center py-8">
      <p className="text-yellow-300">{subHeading}</p>
      <h3 className="uppercase border-y-2 border-slate-400 py-4 w-4/12 mx-auto text-2xl md:text-3xl ">
        {heading}
      </h3>
    </div>
  );
};

export default SheardTitle;
