import React, { useContext } from "react";
import DashSectionHeading from "../../Shared/DashSectionHeading";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {user}=useContext(AuthContext)
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handelMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    
    .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is admin now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    .catch(err=>{
        console.log(err);
    })
  }

  const handelDelete = user => {
    // Check if the current user has admin role
    if (user.role !== 'admin') {
      console.log("Only admin users can delete other users.");
      return;
    }
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              // Delete user from Firebase Auth
              const auth = getAuth();
              auth.deleteUser(user.firebaseUid) // Assuming you have a field for firebaseUid in your user object
                .then(() => {
                  refetch(); // Refetch users after successful deletion
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                })
                .catch(error => {
                  console.error("Error deleting user from Firebase Auth:", error);
                });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  }
  
  return (
    <div>
      <div>
        <DashSectionHeading
          subHeading="AllUsers"
          heading="MANAGE ALL USERS"
        ></DashSectionHeading>
      </div>

      <div className="bg-white px-4">
        <div>
          <h2 className="text-3xl font-bold">user: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-red-300 rounded-lg ">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                   {user.roll==='admin'?'admin': <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn btn-accent text-xl bg-white"
                    >
                      <FaUsers className=""></FaUsers>
                    </button>}
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(user._id)}
                      className="btn btn-error text-xl"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
