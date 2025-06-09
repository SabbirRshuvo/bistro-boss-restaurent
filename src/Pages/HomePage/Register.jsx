import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import bg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
const Register = () => {
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    syncUserWithDatabase,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);

      await updateUserProfile(data.name, data.photoURL);

      await syncUserWithDatabase({
        displayName: data.name,
        email: data.email,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: true,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      // Sync Google user with database
      await syncUserWithDatabase({
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Google sign in successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="bg-gray-200 max-w-7xl h-[700px] mx-auto mt-10 justify-center items-center text-center flex gap-6">
      <div className="w-1/2">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">Register</h2>

            {/* Name Field */}
            <div>
              <label className="label flex">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="name here"
                className="input input-bordered w-full focus:outline-0"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
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

            {/* Photo URL Field */}
            <div>
              <label className="label flex">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: "Photo URL is required" })}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-outline w-full"
              disabled={loading}
            >
              {loading ? "Processing..." : "Sign Up"}
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
        <div className="w-1/2 mx-auto gap-4 justify-around pt-8 space-y-2">
          <p className="text-center font-medium">Or sign up with</p>
          <button
            onClick={handleGoogleSignIn}
            className="btn rounded-full w-full btn-outline"
            disabled={loading}
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
      <div className="w-1/2">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Register;
