import { Navigate, useLocation } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";


const AdminRouters = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]= useAdmin();
    const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
        </div>
      </>
    );
  }
  if (user&&isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};


export default AdminRouters;