import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBook } from "react-icons/fa6";
import { FaProcedures, FaTable, FaUser, FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin_analytics"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin_analytics");
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <p className="text-xl font-bold ">Hi welcome back</p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 ">
        <div
          style={{
            background:
              "linear-gradient(to right, rgb(100, 52, 245), rgb(255, 100, 200))",
          }}
          className="h-20 lg:h-24 lg:w-44 w-40 rounded-lg "
        >
          <div className="">
            <div className="flex justify-center items-center gap-4 py-4">
              <p className="text-xl lg:text-2xl text-white">
                <FaBook></FaBook>
              </p>
              <div>
                {isLoading ? (
                  <SyncLoader color={"#ffffff"} loading={true} css={override} size={10} />
                ) : (
                  <>
                    <p className="text-2xl text-white font-bold">
                      ${stats?.revenue || 0}
                    </p>
                    <p className="text-white font-bold">Revenue</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-20 lg:h-24 lg:w-44 w-40 rounded-lg "
          style={{
            background:
              "linear-gradient(to right, rgb(211, 162, 86), rgb(300, 162, 100))",
          }}
        >
          <div className="">
            <div className="flex justify-center items-center gap-4 py-4">
              <p className="text-xl lg:text-2xl text-white">
                <FaUsers></FaUsers>
              </p>
              <div>
                <p className="text-2xl text-white font-bold">{stats?.users||0}</p>
                <p className="text-white font-bold">Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-20 lg:h-24 lg:w-44 w-40 rounded-lg "
          style={{
            background:
              "linear-gradient(to right, rgb(187, 52, 245), rgb(255, 123, 200))",
          }}
        >
          <div className="">
            <div className="flex justify-center items-center gap-4 py-4">
              <p className="text-xl lg:text-2xl text-white">
                <SiCodechef />{" "}
              </p>
              <div>
                <p className="text-2xl text-white font-bold">{stats?.menuItems || 0}</p>
                <p className="text-white font-bold">Products</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-20 lg:h-24 lg:w-44 w-40  rounded-lg"
          style={{
            background:
              "linear-gradient(to right, rgb(120, 174, 255), rgb(106, 174, 200))",
          }}
        >
          <div className="">
            <div className="flex justify-center items-center gap-4 py-4">
              <p className="text-xl lg:text-2xl text-white">
                <FaTable></FaTable>
              </p>
              <div>
                <p className="text-2xl text-white font-bold">{stats?.orders ||0}</p>
                <p className="text-white font-bold">Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default AdminHome;
