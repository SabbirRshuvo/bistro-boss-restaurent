import React, { use, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const unique = ["All", ...new Set(json.map((item) => item.category))];
        setCategories(unique);
      });
  }, []);

  // Function to filter data by category
  const getItemsByCategory = (cat) => {
    return cat === "All" ? data : data.filter((item) => item.category === cat);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto mt-8">
      <Tabs>
        <TabList className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat, index) => (
            <Tab
              key={index}
              className="btn btn-outline"
              selectedClassName="btn-active btn-info"
            >
              {cat}
            </Tab>
          ))}
        </TabList>

        {categories.map((cat, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {getItemsByCategory(cat).map((item, i) => (
                <div key={i} className="card bg-base-100 shadow-md border">
                  <figure>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body flex flex-col text-center items-center ">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="items-center justify-center text-center">
                      <button className="btn btn-outline border-0 border-b-2 border-yellow-400">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopCategory;
