import { MdDelete, MdMenu, MdOutlineMenuBook } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import DashSectionHeading from "../../Shared/DashSectionHeading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, NavLink } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handelDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
       ////console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${data.name} file has been deleted.`,
            icon: "success",
          });
        }
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
      }
    });
  };
  return (
    <div>
      <div>
        <DashSectionHeading
          heading="Manage all item"
          subHeading="Hurry up"
        ></DashSectionHeading>
      </div>
      <div className="bg-white ">
        <div className="overflow-y-auto ">
          <table className="table">
            {/* head */}
            <thead className="bg-yellow-400">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </td>
                  <td>${item.price}</td>

                  <th>
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                    <button className="btn btn-accent">
                        <MdOutlineMenuBook></MdOutlineMenuBook>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handelDelete(item)}
                      className="btn btn-error text-md "
                    >
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
