import React, { useContext, useEffect, useState } from "react";
import AddDocumentModal from "../components/addDocumentModal/AddDocumentModal";
import axios from "axios";
import FileItem from "../components/FileItem/FileItem";
import DocumentCard from "../components/DocumentCard/DocumentCard";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import { BACKEND_BASE_URL } from "../config/const";

const Documents = () => {
  const [showDocModal, setShowDocModal] = useState(false);
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [reFresh, setReFresh] = useState(false);
  console.log(user);

  const res = async () => {
    const data = await axios.get(
      `${BACKEND_BASE_URL}/api/v1/document/document_list/${user?.email}`
    );
    console.log(data?.data);
    setData(data?.data?.data);
  };

  useEffect(() => {
    setReFresh(true);
    res();
    setReFresh(false);
  }, [user, reFresh]);

  console.log(data);

  return (
    <div>
      {" "}
      <Toaster />
      <div className="Add_User_Button flex justify-end my-10">
        <label
          onClick={() => setShowDocModal(true)}
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
          Add Documents
        </label>
      </div>
      <div className="mt-5">
        {data.length === 0 ? (
          <>
            <p className="text-center text-2xl font-semibold flex items-center justify-center h-[40vh] ">
              No Document Found{" "}
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
            <div className="grid grid-cols-12 gap-5">
              {data?.map((item) => (
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <DocumentCard setReFresh={setReFresh} item={item} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {showDocModal && (
        <AddDocumentModal
          setShowDocModal={setShowDocModal}
          user={user}
          res={res}
        />
      )}
    </div>
  );
};

export default Documents;
