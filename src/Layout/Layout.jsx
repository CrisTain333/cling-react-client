<<<<<<< HEAD
import React from "react";
import { Link, Outlet,useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/UserTable/Filter";
=======
import React, { useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../Context/AuthProvider";
>>>>>>> e694563634adb151e6beb91d5813f821da128418

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
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <div className="w-[95%] mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="bg-base-100 rounded text-lg font-medium">
              <Link to="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                User
              </Link>
              
              <Link to="/statuses">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Status
              </Link>
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
