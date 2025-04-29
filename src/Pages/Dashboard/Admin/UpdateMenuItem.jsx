import { useLoaderData } from "react-router";
import SheardTitle from "../../../Sheared/SheardTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateMenuItem = () => {
  const item = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const recipeData = {
        name: data.name,
        category: data.category,
        price: parseInt(data.price),
        recipe: data.recipe,
      };

      const res = await axiosSecure.patch(`/menu/${item._id}`, recipeData);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} have successfully updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SheardTitle subHeading={"---hurry up---"} heading={"manage all items"} />

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
              defaultValue={item.name}
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
                defaultValue={item.category}
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
                defaultValue={item.price}
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
            <label htmlFor="recipe" className="block text-lg font-medium">
              Recipe Details
            </label>
            <textarea
              id="recipe"
              placeholder="Enter recipe details"
              {...register("recipe", {
                required: "Recipe details are required",
              })}
              defaultValue={item.recipe}
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none "
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipe.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 cursor-pointer focus:outline-none"
            >
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
