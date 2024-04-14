import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/Ourshop/OurShop";
import Login from "../Pages/User/Login";
import SignUp from "../Pages/User/SignUp";
import PrivateRouts from "./PrivateRouts";
import Dashboard from "../Layout/Dashbord/Dashboard";
import MyCart from "../DashBoardPages/MyCart/MyCart";
import AllUsers from "../DashBoardPages/AdminDashboard/AdminAllUser/AllUsers";
import AdminAddItem from "../DashBoardPages/AdminDashboard/AdminAddItem/AdminAddItem";
import ManageItems from "../DashBoardPages/AdminDashboard/AdminManageItems/ManageItems";
import ManageBooking from "../DashBoardPages/AdminDashboard/AdminManageBooking/ManageBooking";
import AdminRouters from "./AdminRouters";
import UpdateProduct from "../DashBoardPages/AdminDashboard/UpdateProduct/UpdateProduct";
import Booking from "../DashBoardPages/MyBooking/Booking";
import Payment from "../DashBoardPages/Payment/Payment";
import MyPayment from "../DashBoardPages/Payment/MyPayment";
import Userhome from "../DashBoardPages/UserHome/Userhome";
import AdminDashHome from "../Layout/Dashbord/AdminDashHome";
import AdminHome from "../DashBoardPages/AdminDashboard/AdminHome/AdminHome";
import Contact from "../Pages/Contact/Contact";
import Policy from "../Footer/AboutFoot/Policy";

const router = createBrowserRouter([
  // all routs
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop",
        element: (
          <PrivateRouts>
            <OurShop></OurShop>
          </PrivateRouts>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element:<Contact />
      },
     
    ],
  },

  // Dashboard routes
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // user routes
      {
        path: "UserHome",
        element: <Userhome></Userhome>,
      },
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "pay",
        element:<Payment></Payment>
      },
      {
        path: "payment",
        element:<MyPayment></MyPayment>
      },
      {
        path:'booking',
        element:<Booking></Booking>
      },

      //  admin routes
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path: "adminAllUsers",
        element:<AdminRouters><AllUsers /></AdminRouters>,
      },
      {
        path: "adminAddItems",
        element:<AdminRouters> <AdminAddItem></AdminAddItem></AdminRouters>,
      },
      {
        path: "manageItems",
        element:<AdminRouters> <ManageItems></ManageItems></AdminRouters>,
      },
      {
        path: "adminBooking",
        element: <AdminRouters><ManageBooking></ManageBooking></AdminRouters>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
