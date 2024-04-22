import React, { useContext, useState } from "react";
import img from "../../assets/others/authentication1.png";
import bg from "../../assets/others/authentication.png";
import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "./SocialLogin";


const SignUp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserprofile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";

  const onSubmit = (data) => {
    // //console.log(data);
    createUser(data.email, data.password).then((result) => {
      const logUser = result.user;
      //   //console.log(logUser);
      updateUserprofile(data.name)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          // post email to db
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
                //console.log('user add');
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1000,
              });
              navigate(from, { replace: true });
            }
          });
        })
        .catch((err) => {
          //console.log(err);
        });
    });
  };


  return (
    <div>
      <Helmet>
        <title>Bistro | sign Up</title>
      </Helmet>
      <div>
        <div
          className="hero h-screen"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        >
          <div
            className="md:h-[500px] md:w-[700px] lg:w-[900px] lg:h-[500px] md:shadow-2xl border-y-4 "
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
          >
            <div>
              <div className="hero-content grid md:grid-cols-2  ">
                <div className="text-center lg:text-left">
                  <div className="text-center lg:text-left hidden md:block lg:block">
                    <div>
                      <img className="w-[400px]" src={img} alt="" />
                    </div>
                  </div>
                </div>
                <div className="md:w-full  ">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        name="name"
                        {...register("name", {
                          required: true,
                          minLength: 4,
                          maxLength: 20,
                        })}
                        type="text"
                        placeholder="Name"
                        className="input input-bordered md:h-10 h-12 "
                        required
                      />
                      {errors.name && (
                        <span className="mt-1 text-red-400 ">
                          Need 4 cha minimum
                        </span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        name="email"
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="email"
                        className="input input-bordered md:h-10 h-12"
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-control relative">
                      <label className="label ">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        name="password"
                        {...register("password", {
                          minLength: 6,
                          maxLength: 12,
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        className="input input-bordered md:h-10 h-12 pr-10"
                        required
                      />
                      {showPassword ? (
                        <FaEye
                          className="absolute right-3 top-[60px] transform -translate-y-1/2 cursor-pointer text-gray-400"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <FaEyeSlash
                          className="absolute right-3 top-[60px] md:top-[57px]  transform -translate-y-1/2 cursor-pointer text-gray-400"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                    {errors.password && (
                      <span className="mt-1 text-red-400 ">
                        need small and capital and some spica cheater 6
                      </span>
                    )}
                    <div className="form-control ">
                      <input
                        className="btn btn-primary mt-2 "
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                  <div className="text-center ">
                    <p>
                      Already Registered?{" "}
                      <NavLink
                        to="/login"
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        <span
                          style={{ textDecoration: "underline", color: "blue" }}
                        >
                          Go to login
                        </span>
                      </NavLink>
                    </p>
                    <p>Or sign with </p>
                    <div className="flex justify-center  mt-3">
                      <div className="flex gap-4 text-xl">
                       <SocialLogin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
