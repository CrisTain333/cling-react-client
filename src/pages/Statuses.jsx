import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import AddStatusModal from "../components/addStatusModal/AddStatusModal";
// import Table from "../components/UserTable/Table";
import StatusList from "../components/StatusList/StatusList"

export default function Statuses() {
  const [showStatusModal, setShowStatusModal] = useState(false);

  // Fetching Statuses
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Data"],
    queryFn: async () => {
      const res = await fetch(
        "https://cling-task-server.onrender.com/api/v1/status/status-list"
      );
      const data = res.json();
      return data;
    },
  });
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <div class="Add_User_Button flex justify-end my-10">
        <label
          onClick={() => setShowStatusModal(true)}
          htmlFor="my-modal"
          className="bg-gradient-to-r from-sky-400  to-purple-500 text-white uppercase text-sm font-semibold px-4 py-2 rounded flex items-center cursor-pointer"
          // value="Login"
        >
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
          Add Status
        </label>

      </div>

      <div className="flex justify-between items-center">
          <div className="filter-box">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>Order by :-</option>
            <option>Oldest first</option>
            <option>Newest first</option>
          </select>
          </div>

          {/* search box  */}
          <div className="search-box">
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* <div className="my-5">
        <Table refetch={refetch} data={data} />
      </div> */}

      <h1 class="text-3xl font-bold text-center mb-8">Status-List</h1>

      {data?.data.map((e)=>{
        return (
          <div className="my-8">
            <StatusList e={e}/>
          </div>
        );
      })}
      {showStatusModal && (
        <AddStatusModal
          setShowStatusModal={setShowStatusModal}
          refetch={refetch}
        />
      )}

      {/* Status Pagination  */}
      <div className="btn-group flex justify-center m-8">
        <button className="btn">«</button>
        <button className="btn">Page 1</button>
        <button className="btn">»</button>
      </div>
      <Toaster />
    </div>
  );
}
