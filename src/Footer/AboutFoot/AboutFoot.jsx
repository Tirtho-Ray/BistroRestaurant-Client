import React from "react";

const AboutFoot = () => {
  return (
    <div>
      <div>
        <h1 className="text-sm md:text-xl font-bold mt-3">About us</h1>
        <div className="mt-2 text-sm">
          <div>
            <button className="hover:underline">
              <p>Privacy Policy</p>
            </button>
          </div>
          <div>
            <button className="hover:underline">
              <p>Terms and Conditions</p>
            </button>
          </div>
          <div>
            <button className="hover:underline">
              <p>Contact</p>
            </button>
          </div>
          <p>FAQ's</p>
          <p>Safety Measures</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFoot;