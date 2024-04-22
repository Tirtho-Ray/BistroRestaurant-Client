import { useContext, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import Swal from "sweetalert2";
// Importing icons from react-icons

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cart]=useCart();
  const [isAdmin]= useAdmin();

  // const handelLogout =()=>{
  //   logOut()
  //   .then(()=>{})
  //   .catch(err =>{
  //     //console.log(err);
  //   })
  // }
  const handelLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout action
        logOut()
          .then(() => { })
          .catch(err => {
            //console.log(err);
          })
      }
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartUser = (
    <>
      <div className="flex items-center gap-1 md:gap-2 relative">
        <NavLink to='/'>
          <FaRegUserCircle size={24} />
        </NavLink>
        {user&&!isAdmin && (
          <NavLink to='/dashboard/myCart'>
            <div>
              <div className="/myCart">
                <FaCartShopping size={24} />
              </div>
              <div className="absolute top-[2px] left-10 md:left-[42px] md:top-[3px] lg:left-[42px] lg:top-[2px] xl:left-[42px]">
                <button className="h-4 w-4 rounded-full bg-red-400 text-[10px]">{cart.length}</button>
              </div>
            </div>
          </NavLink>
        )}
      </div>
    </>
  );
  

  const NavOptions = (
    <div className="list-none md:flex md:gap-4 md:justify-center items-center">
      <NavLink to="/">
        <li
          className="px-2  Menu shadow-md py-2  text-lg  rounded-md md:px-0   md:py-0 md:shadow-none md:mt-0 md:rounded-none"
          onClick={() => setIsOpen(false)} // Close the menu when clicked
        >
          Home
        </li>
      </NavLink>
      <NavLink to="/contact">
        <li
          className="px-2  Menu shadow-md py-2  text-lg  mt-2 rounded-md md:px-0   md:py-0 md:shadow-none md:mt-0 md:rounded-none"
          onClick={() => setIsOpen(false)} // Close the menu when clicked
        >
          Contact Us
        </li>
      </NavLink>
      {user && isAdmin && (
        <NavLink to="dashboard/adminHome">
          <li
            className="px-2  Menu shadow-md py-2  text-lg  mt-2 rounded-md md:px-0  md:py-0 md:shadow-none md:mt-0 md:rounded-none"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            Dashboard
          </li>
        </NavLink>
      )}
      {user && !isAdmin && (
        <NavLink to="dashboard/UserHome">
          <li
            className="px-2 Menu shadow-md py-2  text-lg  mt-2 rounded-md md:px-0   md:py-0 md:shadow-none md:mt-0 md:rounded-none"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            Dashboard
          </li>
        </NavLink>
      )}
  
      <NavLink to="/menu">
        <li
          className="px-2 Menu shadow-md py-2  text-lg  mt-2 rounded-md md:px-0 md:mt-0  md:py-3 md:shadow-none md:rounded-none"
          onClick={() => setIsOpen(false)} // Close the menu when clicked
        >
          Our Menu
        </li>
      </NavLink>
      <NavLink to="/shop">
        <li
          className="px-2   Menu shadow-md py-2   text-lg  mt-2 rounded-md md:px-0   md:py-0 md:shadow-none md:mt-0 md:rounded-none"
          onClick={() => setIsOpen(false)} // Close the menu when clicked
        >
          Our Shop
        </li>
      </NavLink>
      {user ? (
        <li
          onClick={handelLogout}
          className="px-2  Menu shadow-md py-2 mt-1  text-lg rounded-md md:px-0  md:py-0 md:shadow-none md:mt-0 md:rounded-none"
        >
          Logout
        </li>
      ) : (
        <NavLink to="/login">
          <li
            className="px-2 Menu shadow-md py-2 text-lg rounded-md md:px-0  md:py-0 md:shadow-none md:mt-0 md:rounded-none"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            Login
          </li>
        </NavLink>
      )}
      <div className="invisible md:visible">{cartUser}</div>
    </div>
  );
  

  return (
    <div>
      <div className="py-3 md:py-4  lg:py-6 relative px-4">
        <div className="flex justify-between items-center">
          {/* Restaurant Name */}
          <div className="font-bold text-xl">
            <p>BISTRO</p>
          </div>
          {/* Menu Icon - Only for small devices */}
          <div className="md:hidden absolute top-0 right-0 mt-4 mr-4 flex gap-2 items-center">
            {cartUser}
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
          {/* Navigation Links - For larger devices */}
          <ul className="hidden md:flex md:gap-2 list-none md:space-x-2 font-bold">
            {NavOptions}
          </ul>
        </div>
        {/* Navigation Links - Overlay for small devices */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white z-10 shadow-md transform transition-transform duration-300">
            <ul className="flex flex-col md:flex-row md:gap-2 list-none md:space-x-2 font-bold py-2 px-4">
              {NavOptions}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
