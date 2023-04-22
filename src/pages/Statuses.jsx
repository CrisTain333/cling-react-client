import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AddStatusModal from "../components/addStatusModal/AddStatusModal";
// import Table from "../components/UserTable/Table";
import StatusList from "../components/StatusList/StatusList";
import ReactLoading from "react-loading";
export default function Statuses() {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState("");
  const [sortState, setSortState] = useState("none");
  const [search, setSearch] = useState("");

  // Fetching Statuses
  useEffect(() => {
    const getUser = () => {
      fetch("https://cling-task-server.onrender.com/api/v1/user/me", {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setUser(data?.data);
        })
        .catch((error) => {
          console.log(error, "line 28 App.js");
          setUser("");
        });
    };
    getUser();
  }, []);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Data", search],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/api/v1/status/status-list?search=${search}&email=${user?.email}`,
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
      }
      const data = res.json();
      return data;
    },
  });
  console.log(data);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  // Sort Methods
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.createdDate < b.createdDate ? -1 : 1) },
    descending: { method: (a, b) => (a.createdDate > b.createdDate ? -1 : 1) },
  };

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
        <div className="Add_User_Button flex justify-end my-10">
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

        {data?.data?.length === 0 ? (
          <>
            {" "}
            <p className="text-center text-2xl font-semibold flex items-center justify-center h-[40vh] ">
              No Status Found{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </span>
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="filter-box">
                <select
                  className="select select-primary w-full max-w-xs"
                  onChange={(e) => setSortState(e.target.value)}
                >
                  <option disabled selected>
                    Order by :-
                  </option>
                  <option value="descending">Oldest first</option>
                  <option value="ascending">Newest first</option>
                </select>
              </div>

              {/* search box  */}
              <div className="search-box">
                <div className="form-control">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered"
                      onChange={handleSearch}
                    />
                    <button className="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center mb-8">Status-List</h1>

            {!error &&
              data?.data?.sort(sortMethods[sortState].method).map((e) => {
                return (
                  <div className="my-8">
                    <StatusList e={e} user={user} refetch={refetch} />
                  </div>
                );
              })}
          </>
        )}

        {showStatusModal && (
          <AddStatusModal
            setShowStatusModal={setShowStatusModal}
            refetch={refetch}
            user={user}
          />
        )}

        {/* Status Pagination 
      <div className="btn-group flex justify-center m-8">
        <button className="btn">«</button>
        <button className="btn">Page 1</button>
        <button className="btn">»</button>
      </div> */}
        <Toaster />
      </div>
    </>
  );
}
