import React from "react";
import SheardTitle from "../../../Sheared/SheardTitle";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const imageFile = data.image[0];

      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axiosSecure.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_API_KEY
        }`,
        formData
      );
      const imageUrl = res.data.data.url;
      if (res.data.success) {
        const recipeData = {
          name: data.name,
          category: data.category,
          price: parseInt(data.price),
          recipe: data.recipe,
          image: imageUrl,
        };

        const res = await axiosSecure.post("/menu", recipeData);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item created has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
        console.log(res.data);
      }
    } catch (error) {
      console.log("error uploading image", error);
    }
  };
  return (
    <div>
      <SheardTitle subHeading={"---What's a new---"} heading={"Add an item"} />
      {/* form stared here */}
      <div className="w-11/12 mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Recipe Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter recipe name"
              {...register("name", { required: "Recipe name is required" })}
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none "
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex  gap-4">
            {/* category */}
            <div className="w-full">
              <label htmlFor="category" className="block text-lg font-medium">
                Category
              </label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none "
              >
                <option value="">Select category</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Salad">Salad</option>
                <option value="Popular">Popular</option>
                <option value="Popular">Popular</option>
                <option value="Dessert">Dessert</option>
                <option value="Offered">Offered</option>
                <option value="Drinks">Drinks</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
            {/* Price */}
            <div className="w-full">
              <label htmlFor="price" className="block text-lg font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter price"
                {...register("price", {
                  required: "Price is required",
                  min: 0,
                })}
                className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none "
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>
          {/* Category */}

          {/* Recipe Details */}
          <div>
            <label htmlFor="details" className="block text-lg font-medium">
              Recipe Details
            </label>
            <textarea
              id="details"
              placeholder="Enter recipe details"
              {...register("details", {
                required: "Recipe details are required",
              })}
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none "
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.details.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="image" className="block text-lg font-medium">
              Upload Recipe Image
            </label>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="file"
                id="image"
                {...register("image")}
                className="w-full px-4 py-2 border bg-white rounded-md"
              />
              <FiUpload className="text-green-500 text-xl" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 cursor-pointer focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
