import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../../DashBoardPages/DashBoardNav/DashboardNav";
import { MdMenu } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

  return (
    <div>
         <Helmet>
        <title>Bistro | Dashboard</title>
      </Helmet>
        <div className="flex">
      <div className="">
      
        
      <div>
      <DashboardNav></DashboardNav>
      </div>
        
      </div>
      <div className="flex-1 p-8 bg-slate-100">
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
