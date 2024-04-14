import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DashSectionHeading from "../Shared/DashSectionHeading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPayment = () => {
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
    <div>
      <DashSectionHeading
        subHeading={"Add a galace"}
        heading={"payment history"}
      ></DashSectionHeading>
      <div className="bg-white p-3">
        <p className="font-bold">Total Payments: {payments.length}</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table header */}
            <thead>
              <tr className="font-bold">
                <th></th>
                <th className="text-bold">Email</th>
                <th>Name</th>
                <th>Total price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Table body */}
              {payments.map((payment, index) => (
                <tr key={payment._id} className="bg-base-200">
                  <th>{index}</th>
                  <td>{payment.email}</td>
                  <td>{payment.name}</td>
                  <td>{payment.price}</td>
                  <td>{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPayment;
