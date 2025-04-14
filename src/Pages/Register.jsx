import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import bg from "../assets/others/authentication2.png";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const userData = result.user;
        updateUserProfile(data.name, data.photoURL).then(() => {
          console.log("profile update");
        });
        console.log(userData);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-200 max-w-7xl h-[700px] mx-auto mt-10 justify-center items-center text-center flex gap-6">
      <div className="w-1/2  ">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">Registar</h2>

            {/* Name Field */}
            <div>
              <label className="label flex">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                {...register("name")}
                placeholder="name here"
                className="input input-bordered w-full focus:outline-0"
              />
            </div>
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
            <div>
              <label className="label flex">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: "photoURL is required" })}
                placeholder="url"
                className="input input-bordered w-full focus:outline-0"
              />
              {errors.photoURL && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photoURL.message}
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
            {/* captcha field */}

            {/* Submit Button */}
            <button type="submit" className="btn btn-outline w-full">
              Sign Up
            </button>

            {/* Additional Links */}
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className=" w-1/2 mx-auto gap-4 justify-around pt-8 space-y-2 ">
          <p></p>
          <button
            onClick={handleGoogleSignIn}
            className="btn rounded-full w-full btn-outline"
          >
            <FaGoogle />
          </button>
          <button className="btn rounded-full w-full btn-outline">
            <FaFacebook />
          </button>
          <button className="btn rounded-full w-full btn-outline">
            <FaGithub />
          </button>
        </div>
      </div>
      {/* image section */}
      <div className="w-1/2  ">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Register;
