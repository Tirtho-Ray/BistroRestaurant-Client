import Swal from "sweetalert2";
// import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const ShopCard = ({ item }) => {
  const { image, recipe, price, name } = item;
  const {user}=useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch]= useCart();

  const handelCart =() =>{
    if(user&&user.email){
    // send cart item to database
       const cartItem ={
        email:user.email,
        name,
        image,
        price
       }

       axiosSecure.post('/carts', cartItem)
       .then(res =>{
        // console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cart add item successfully",
                showConfirmButton: false,
                timer: 1000
              });
            //   refetch the cart 
            refetch();
        }
       })


    }else{
        Swal.fire({
            title: "You are not not login",
            text: "please login to add cart ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "please login "
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', {state:{from:location}})
            }
          });
    }
  }
  return (
    <div className="">
     <div>
          <div className=" h-[190px] w-[140px] md:h-[230px] md:w-52 lg:h-[330px] lg:w-[250px] bg-yellow-300 relative mx-auto rounded-[10px]">
            <img style={{borderRadius: '8px 8px 0px 0px'}}   className="h-20 md:h-28 lg:h-40 w-full" src={image} alt="" />
            <div className="text-center mt-2 px-1">
              <h1 className="lg:text-[15px] font-bold md:mt-2 lg:mt-3 text-[10px] ">
              {name}
              </h1>
              <p className="text-[8px] lg:text-[13px] font-serif md:mt-2 md:text-[10px] mt-3 lg:px-3">
               {recipe}
              </p>
              <button
              onClick={handelCart}
               className="absolute bottom-1 left-1/2 transform -translate-x-1/2 lg:bottom-4 md:bottom-3 px-1 md:px-2  py-1 bg-slate-300 text-[7px] font-bold btn-outline border-0 border-b-2  rounded-[4px] md:rounded-md  md:text-[10px] lg:text-[13px] ">
        Add to Cart
      </button>
              <div className=" md:w-8 lg:w-12 bg-black absolute top-2 left-[105px] md:top-3 md:left-[165px] lg:top-4 lg:left-[190px]">
               <p className=" md:text-[8px] lg:text-[12px] font-bold flex  text-white text-[8px] w-7 "> ${price}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShopCard;
