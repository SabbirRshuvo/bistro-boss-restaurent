import React from "react";
import bg from "../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle login logic or API call
  };
  return (
    <div className="bg-gray-200 max-w-7xl h-[500px] mx-auto mt-10 justify-center items-center text-center flex gap-6">
      {/* image section */}
      <div className="w-1/2 ">
        <img src={bg} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="text-center items-center my-4 text-2xl font-semibold uppercase">
          Login
        </h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">Login</h2>

            {/* Email Field */}
            <div>
              <label className="label flex">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="example@email.com"
                className="input input-bordered w-full focus:outline-0"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="label flex">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="********"
                className="input input-bordered w-full focus:outline-0"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-outline w-full">
              Login
            </button>

            {/* Additional Links */}
            <p className="text-sm text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
