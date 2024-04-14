import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaTelegram } from "react-icons/fa";
import img1 from "../assets/appIcon/Screenshot1.png";
import img2 from "../assets/appIcon/Screenshot2.png";

const FollowUsFoot = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-sm md:text-xl mt-3">Follow Us :</h1>
        <div className="flex gap-3 mt-3">
          <div className="text-sm md:text-xl lg-text-2xl">
            <FaGoogle />
          </div>
          <div className="text-sm md:text-xl lg-text-2xl">
            <a
              href="https://web.facebook.com/profile.php?id=100065613411948"
              target="_blank"
            >
              {" "}
              <FaFacebook />
            </a>
          </div>
          <div className="text-sm md:text-xl lg-text-2xl">
            <a
              href="https://www.linkedin.com/in/tirtho-ray-9a2960242/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="text-sm md:text-xl lg-text-2xl">
            <a
              href="https://web.telegram.org/a/#-1002007141958"
              target="_blank"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
        <div className="md:flex gap-2 md:mt-1">
          <div>
            <a href="https://play.google.com/store/apps/">
              {" "}
              <img className="w-24 mt-2" src={img1} alt="" />
            </a>
          </div>
          <div>
            <a href="http://apps.apple.com/<country>/app/">
              {" "}
              <img className="w-24 mt-2" src={img2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUsFoot;
