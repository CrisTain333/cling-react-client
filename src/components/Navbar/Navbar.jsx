import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

export default function Navbar() {
  const { isAuthenticate, logout } = useContext(AuthContext);

  return (
    <div>
<<<<<<< HEAD
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">Cling-React-Task</a>
        </div>
        <div className="flex-none">
        <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered mx-3" />
    </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                  alt="userImage"
                />
              </div>
            </label>
            <ul
=======
      <div className="navbar bg-base-100 shadow-md p-2">
        <div className="navbar-start ">
          <div className="dropdown">
            <label
>>>>>>> e694563634adb151e6beb91d5813f821da128418
              tabIndex={0}
              className="btn btn-ghost btn-circle "
              htmlFor="my-drawer-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Cling-Task
          </Link>
        </div>
        <div className="navbar-end">
          {isAuthenticate ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  flex items-center cursor-pointer"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  flex items-center cursor-pointer">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </span>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
