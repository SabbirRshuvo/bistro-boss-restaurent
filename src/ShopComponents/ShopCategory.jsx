import React, { use, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const unique = ["All", ...new Set(data.map((item) => item.category))];
        setCategories(unique);
      });
  }, []);

  const getItemsByCategory = (cat) => {
    return cat === "All" ? data : data.filter((item) => item.category === cat);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setItemOffset(0); // pagination reset
  };

  useEffect(() => {
    const items = getItemsByCategory(selectedCategory);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [data, selectedCategory, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) %
      getItemsByCategory(selectedCategory).length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto mt-8">
      <Tabs>
        <TabList className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <Tab
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`btn ${
                selectedCategory === category ? "btn-secondary" : "btn-outline"
              }`}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {currentItems.map((item, i) => (
                <div key={i} className="card bg-base-100 shadow-md border">
                  <figure>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body flex flex-col text-center items-center w-2/3 mx-auto">
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
      {/* paginatiuo */}
      <div className="mt-8 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="→"
          previousLabel="←"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          containerClassName="flex gap-2"
          pageClassName="btn btn-sm"
          previousClassName="btn btn-sm"
          nextClassName="btn btn-sm"
          activeClassName="btn-active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default ShopCategory;
