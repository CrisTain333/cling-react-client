import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import AddUserModal from "../components/addUsermodal/AddUserModal";
import Table from "../components/UserTable/Table";
import axios from "axios";

const User = () => {
  const [showAddUserModel, setShowUserModel] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const {
  //   data = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["Data", sort, search],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:8000/api/v1/user/user-listing?sort=${sort}&search=${search}`
  //     );
  //     const data = res.json();
  //     return data;
  //   },
  //   {

  //   refetchOnWindowFocus: false,
  //   keepPreviousData: true,

  // });

  const getUsers = async (key, searchTerm = "") => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/user/user-listing?sort=${sort}&search=${search}`
    );
    return data;
  };

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery(["users", search], getUsers, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
  console.log(data);

  function handleSort(e) {
    setSort(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  if (isLoading) {
    return <p>Loading ......</p>;
  }
  return (
    <div>
      <div className="my-5">
        <input
          type="text"
          placeholder="Search users with email , name "
          className="p-2 border rounded-md w-full text-center"
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
        <Table refetch={refetch} data={data} />
      </div>

      {showAddUserModel && (
        <AddUserModal setShowUserModel={setShowUserModel} refetch={refetch} />
      )}
      <Toaster />
    </div>
  );
};

export default User;
