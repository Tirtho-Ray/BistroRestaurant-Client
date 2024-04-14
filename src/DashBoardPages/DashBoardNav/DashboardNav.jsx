import {
  FaUser,
  FaBook,
  FaCartPlus,
  FaHSquare,
  FaHome,
  FaList,
  FaRev,
  FaUtensils,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TbBrandBooking } from "react-icons/tb";
import useAdmin from "../../hooks/useAdmin";
import { MdMenu, MdShop } from "react-icons/md";

const DashboardNav = () => {
  // get admin values from db
  const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="w-65 md:w-70 lg:w-[230px] min-h-screen bg-orange-400">
        <div></div>
        <div className="text-center py-10">
          <p className="">BISTRO BOSS </p>
          <p>RESTAURANT</p>
        </div>
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="adminHome">
                  <FaHome className="text-[9px] md:text-[15px]"></FaHome>
                  <p className="text-[9px] md:text-[15px]"> ADMIN HOME</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="adminAddItems">
                  <FaUtensils></FaUtensils>
                  ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="manageItems">
                  <FaList></FaList>
                  MANAGE ITEMS
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="adminBooking">
                  <TbBrandBooking></TbBrandBooking>
                  MANAGE BOOKING
                </NavLink>
              </li> */}
              <li>
                <NavLink to="adminAllUsers">
                  <FaUser></FaUser>
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="UserHome">
                  <FaHome></FaHome>
                  USER HOME
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="dashboard/reservation ">
                  <FaHome></FaHome>
                  RESERVATION
                </NavLink>
              </li> */}
              <li>
                <NavLink to="payment">
                  <FaHSquare></FaHSquare>
                  MY PAYMENT
                </NavLink>
              </li>
              <li>
                <NavLink to="myCart">
                  <FaCartPlus></FaCartPlus>
                  MY CART
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/booking">
                  <FaRev></FaRev>
                  ADD REVIEW
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to="booking">
                  <FaBook></FaBook>
                  MY BOOKING
                </NavLink>
              </li> */}
            </>
          )}

          {/* all */}
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              
                <MdMenu />
                Our Menu
             
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <MdShop />
              Our Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdShop />
             Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;
