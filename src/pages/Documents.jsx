import React, { useEffect, useState } from "react";
import AddDocumentModal from "../components/addDocumentModal/AddDocumentModal";
import axios from "axios";
import FileItem from "../components/FileItem/FileItem";

const Documents = () => {
  const [showDocModal, setShowDocModal] = useState(false);
  const [data, setData] = useState([])
  const [user, setUser] = useState("");

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

  useEffect(() => {
    const res = async () => {
      const data = await axios.get(
        `https://cling-task-server.onrender.com/api/v1/document/document_list`
      );
      console.log(data.data.data)
      setData(data.data.data)
    };
    res();
  }, []);

  return (
    <div>
      {" "}
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
       {
        data.map(item => (
          <FileItem item={item}/>
        ))
       }
      {showDocModal && <AddDocumentModal setShowDocModal={setShowDocModal} user={user}/>}
    </div>
  );
};

export default Documents;
