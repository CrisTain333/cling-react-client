import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import AddUserModal from "../components/addUsermodal/AddUserModal";
import Table from "../components/UserTable/Table";
import ReactLoading from "react-loading";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { BACKEND_BASE_URL } from "../config/const";
const User = () => {
  const [showAddUserModel, setShowUserModel] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, isAuthenticate, isAdmin } = useContext(AuthContext);
  console.log(user, isAuthenticate);
  console.log(isAdmin);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery(
    ["users", search, currentPage, sort],
    async () => {
      const res = await fetch(
        `${BACKEND_BASE_URL}/api/v1/user/user-listing?sort=${sort}&search=${search}&page=${currentPage}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("accessToken"),
          },
        }
      );
      if (res.status !== 200) {
        setErrorMessage(res.statusText);
        return setError(true);
      } else {
        const data = await res.json();
        setTotalPages(data?.totalPages);
        return data;
      }
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  function handleSort(e) {
    setSort(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (isLoading) {
    return (
      <>
        <div className="flex h-[50vh] justify-center items-center">
          <ReactLoading
            type="spin"
            color="#ff006e"
            height={"10%"}
            width={"10%"}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="my-5">
          <input
            type="text"
            placeholder="Search users with email , name "
            className="p-3 border rounded-md w-full text-center"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-row justify-between  my-10">
          {/* Sort By Date */}
          <div className="">
            <select
              value={sort}
              onChange={handleSort}
              className="p-3 pr-2 rounded-md border "
            >
              <option value="">Sort by date</option>
              <option value="asc">Oldest first</option>
              <option value="desc">Newest first</option>
            </select>
          </div>

          <div className="Add_User_Button flex justify-end">
            <label
              onClick={() => setShowUserModel(true)}
              htmlFor="my-modal"
              className="bg-gradient-to-r from-sky-400  to-purple-500 text-white uppercase text-sm font-semibold px-4 py-2 rounded flex items-center cursor-pointer"
              // value="Login"
            >
              {/* Search button */}
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                </svg>
              </span>
              Add User
            </label>
          </div>
        </div>
        <div className="my-5">
          <p className="my-2 text-base font-mono font-semibold ml-2">
            Page : {currentPage}
          </p>
          <Table refetch={refetch} data={data} />
        </div>

        <div className="flex justify-center space-x-1 dark:text-gray-100 my-10">
          {pageNumbers?.map((pageNumber) => (
            <button
              onClick={() => handlePageChange(pageNumber)}
              type="button"
              title="Page 1"
              className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
            >
              {pageNumber}
            </button>
          ))}
        </div>

        {showAddUserModel && (
          <AddUserModal setShowUserModel={setShowUserModel} refetch={refetch} />
        )}
        <Toaster />
      </div>
    </>
  );
};

export default User;
