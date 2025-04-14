import React, { useContext, useEffect, useRef, useState } from "react";
import bg from "../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const userData = result.user;
        console.log(userData);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const [captchaInput, setCaptchaInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setCaptchaInput(value);

    if (value.length === 6 && validateCaptcha(value)) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  return (
    <div className="bg-gray-200 max-w-7xl h-[700px] mx-auto mt-10 justify-center items-center text-center flex gap-6">
      {/* image section */}
      <div className="w-1/2 ">
        <img src={bg} alt="" />
      </div>
      <div className="w-1/2">
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
                {...register(
                  "password",
                  {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  },
                  { pattern: /^[A-Za-z]+$/i }
                )}
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
            <div className="form-group">
              <div className="col mt-3">
                <LoadCanvasTemplate />
              </div>
              <div className="col mt-3">
                <div>
                  <input
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="Enter Captcha Value"
                    id="user_captcha_input"
                    name="user_captcha_input"
                    type="text"
                    className="input input-bordered w-full focus:outline-0"
                  ></input>
                </div>
              </div>{" "}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn btn-outline w-full font-semibold ${
                !isCaptchaValid ? "btn-disabled" : ""
              }`}
            >
              Sign In
            </button>

            {/* Additional Links */}
            <p className="text-sm text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
          <div className=" w-1/2 mx-auto gap-4 justify-around pt-8 space-y-2 ">
            <p></p>
            <button
              onClick={handleGoogle}
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
      </div>
    </div>
  );
};

export default Login;
