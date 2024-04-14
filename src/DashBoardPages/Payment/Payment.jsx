import { loadStripe } from "@stripe/stripe-js";
import DashSectionHeading from "../Shared/DashSectionHeading";
import CheakOut from "./CheakOut";
import { Elements } from "@stripe/react-stripe-js";
import { NavLink, Navigate } from "react-router-dom";

const Payment = () => {
  const stripPayment = loadStripe(import.meta.env.VITE_PAYMENT);
  console.log(stripPayment);
  return (
    <div>
      <div>
        <DashSectionHeading
          subHeading={"payment"}
          heading={"dilaM"}
        ></DashSectionHeading>
      </div>
      <div className="md:px-12 w-96 md:w-full bg-white p-4">
        <Elements stripe={stripPayment}>
          <CheakOut></CheakOut>
        </Elements>
      </div>
      <div className="mt-5 flex justify-center">
        <NavLink to="/dashBoard/payment">
          <button className=" btn btn-success">Go to payment </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Payment;
