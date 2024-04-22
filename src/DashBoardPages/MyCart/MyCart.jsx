import React from "react";
import useCart from "../../hooks/useCart";
import SectionHeading from "../../Pages/Shared/SectionHeading/SectionHeading";
import { MdDelete } from "react-icons/md";
import DashSectionHeading from "../Shared/DashSectionHeading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, NavLink } from "react-router-dom";



const MyCart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handelDelete = id =>{
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
            axiosSecure.delete(`/carts/${id}`)
            .then(res =>{
               //console.log(res);
               if(res.data.deletedCount>0){
                refetch();
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
               }
            })
        }
      });

  }

  return (
   <div>
     <DashSectionHeading
        subHeading={"My Cart"}
        heading={"Wanna Add more"}>

        </DashSectionHeading>
    <div>
    <div className="mx-auto bg-white">
      <div className=" px-10 py-4 ">
        <div className=" flex justify-evenly items-center mb-3 ">
          <p className="text-2xl font-bold ">Total Price: {totalPrice}</p>
          <p className="text-2xl font-bold">Total Orders: {cart.length}</p>
          <Link to="/dashboard/pay">
          <button className="btn btn-success">Pay</button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table  mb-4">
            {/* head */}
            <thead className="">
              <tr style={{borderRadius: ' 10px 10px 0px 0px'}}  className="bg-yellow-400  ">
                <th>
                 
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                cart?.map((item, index)=> 
                    <tr key={item._id} >
                    <th>
                     {index}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                        </div>
                        <div>
                          
                          {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                      </div>
                    </td>
                    <td><div className="font-bold">{item.name}</div></td>
                    
                    <td className="font-bold">{item.price}</td>
                    <th>
                      <button onClick={()=>handelDelete(item._id)} className="btn btn-error text-xl"><MdDelete/></button>
                    </th>
                  </tr>
                    )
              }
             
             
             
            
            </tbody>
            {/* foot */}
            
          </table>
        </div>
      </div>
    </div>
    </div>
   </div>
  );
};

export default MyCart;
