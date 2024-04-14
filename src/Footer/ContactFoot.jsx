import React from "react";

const ContactFoot = () => {
  return (
    <div>
      <div>
        <h1 className="text-sm md:text-xl font-bold mt-3">Contact Us:</h1>
        <div className="mt-2 text-sm">
          <p>
            <span className="font-bold">Email: </span>{" "}
            <span className="hover:underline">
              <a href="mailto:tirthoray10@gmail.com">tirthoray10@gmail.com</a>
            </span>
          </p>

          <p className="mt-1 ">
            <span className="font-bold ">Call: </span>{" "}
            <span className="hover:underline">
              <a href="tel:01752900881">01752900881</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFoot;
