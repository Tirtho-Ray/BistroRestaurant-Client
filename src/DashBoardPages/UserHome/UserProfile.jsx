import React, { useContext } from "react";
import { FaPaypal } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Providers/AuthProvider";

const UserProfile = () => {

  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email], // Use optional chaining to avoid errors if user is null
    queryFn: async () => {
      if (!user?.email) return []; // Handle case where user email is null
      try {
        const response = await axiosSecure.get(`/payments/${user.email}`);
        return response.data; // Assuming payments data is directly inside response.data
      } catch (error) {
        console.error("Error fetching payments:", error);
        return []; // Return empty array in case of error
      }
    },
    enabled: !!user?.email, // Enable the query only when user email is available
  });
  return (
    <div className="mt-12 grid md:grid-cols-2">
      <div className="h-32 w-40 md:h-[225px] md:w-[225px] lg:h-[260px] lg:w-[250px] rounded-xl bg-red-300">
        <div className="flex justify-center  py-8">
          <div className="h-16 w-16 md:h-32 md:w-32 lg:h-[130px] lg:w-[130px] bg-white rounded-full border-yellow-500 ">
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <p className=" text-center px-3 font-bold md:text-lg">Name: {user?.displayName}</p>
          {/* <p className=" px-3 font-bold md:text-lg hidden lg:visible">email :{user?.email}</p> */}
        </div>
      </div>
      <div className="gap-3">
        <p className=" text-2xl uppercase font-bold mt-12  md:mt-0">
          Your activates
        </p>
        <div className="flex items-center gap-3 text-xl font-bold mt-6 ">
          <FaCartShopping />
          <p>Your cart :<span className="text-red-500 "> {cart?.length}</span> </p>
        </div>
        <div className="flex items-center gap-3 text-xl font-bold mt-2 ">
          <FaPaypal />
          <p className="text-sm md:text-xl">Your Payment :<span className="text-red-500 "> {payments?.length}</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
