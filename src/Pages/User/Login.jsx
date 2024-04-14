import React, { useContext, useEffect, useRef, useState } from "react";
import img from "../../assets/others/authentication1.png";
import bg from "../../assets/others/authentication.png";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const captchaRef = useRef(null);
  const{login}=useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || '/';



  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
    .then(res =>{
        const user = res.user
        // console.log(user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Succfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true});
    })
  };

 const handelValidateCaptcha = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const userCaptcha = captchaRef.current.value;
  if (validateCaptcha(userCaptcha)) {
    setDisabled(false);
  } else {
    setDisabled(true);
  }
};
// google Login
// const handelGoogleLogin =()=>{
//     googleSignIn()
//     .then((res)=>{
//         navigate(from, { replace: true });
        
//     })
// }
  return (
    <div>
           <Helmet>
            <title>Bistro | Login</title>
        </Helmet>
      <div
        className="hero h-screen"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div
          className="md:h-[560px] md:w-[700px] lg:w-[900px] lg:h-[570px] md:shadow-2xl border-y-4 "
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
                <form onSubmit={handelLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered md:h-10 h-12 "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered md:h-10 h-12"
                      required
                    />
                    {/* set here */}
                    {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                  </div>
                  <div className=" mt-3 ">
                    <div>
                      <LoadCanvasTemplate />
                    </div>
                    {/* type capture */}
                    <input
                      type="text"
                      placeholder="type the text above"
                      className="input input-bordered mt-1 h-10"
                      ref={captchaRef}
                    />
                    <label className="label">
                      <div className="flex gap-4">
                        <div>
                          <a
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forgot password?
                          </a>
                        </div>
                        
                        <>
                          <button
                            onClick={handelValidateCaptcha}
                            className="bg-red-200 px-3 py-1 text-sm font-bold rounded-md "
                          >
                            Valid
                          </button>
                        </>
                      </div>
                    </label>
                  </div>
                  <div className="form-control ">
                    <input
                      disabled={disabled}
                      className="btn btn-primary "
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                <div className="text-center ">
                  <p>
                    New Here?{" "}
                    <NavLink
                      to="/signUp"
                      style={{ color: "blue", textDecoration: "none" }}
                    >
                      <span style={{ textDecoration: "none", color: "blue" }}>
                        create a new account
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
  );
};

export default Login;
