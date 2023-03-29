import React, { useState } from "react";
import AddStatusModal from "../components/addStatusModal/AddStatusModal";

export default function Statuses() {
  const [showStatusModal, setShowStatusModal] = useState(false);
  return (
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
      {
        showStatusModal && <AddStatusModal setShowStatusModal={setShowStatusModal} />
      }
    </div>
  );
}
