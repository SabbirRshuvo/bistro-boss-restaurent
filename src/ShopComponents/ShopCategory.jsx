import React, { use, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import useCart from "../hooks/useCart";

const ShopCategory = () => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/menu`).then((res) => {
      const data = res.data;
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

  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log("adding data", food, user.email);
      const foodItems = {
        menuId: food._id,
        email: user.email,
        name: food.name,
        price: food.price,
        image: food.image,
      };
      axios
        .post(`${import.meta.env.VITE_API_URL}/carts`, foodItems)
        .then((res) => {
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your cart has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You are not Logged In!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,login first! ",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
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
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-2 border-yellow-400"
                      >
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
