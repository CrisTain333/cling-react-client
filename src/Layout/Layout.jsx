import React from "react";
import { Link, Outlet,useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/UserTable/Filter";

const Layout = () => {
  let isUserPage=false;
  let location = useLocation();
  if(location.pathname==='/user'){
    isUserPage=true
  }


  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-2">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="bg-base-100 rounded text-lg font-medium">
              <Link to="/user">User</Link>
            </li>

            {/* Filter tag will visible only when we are currently on user page  */}
              <Filter isUserPage={isUserPage}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
