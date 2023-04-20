import React from "react";
import { Link } from "react-router-dom";

const DocumentCard = ({ item }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = item?.PublicURL;
    link.setAttribute("download", item?.fileName); //or any other extension
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div>
      <div class="max-w-[360px] mx-auto">
        <div class="bg-white shadow-lg rounded-lg mt-9">
          {/* <!-- Card header --> */}
          <header class="text-center px-5 pb-5">
            {/* <!-- Card name --> */}
            <h3 class="text-xl font-bold text-gray-900 mb-1">
              {item?.fileName}
            </h3>
          </header>
          {/* <!-- Card body --> */}
          <div class="bg-gray-100 text-center px-5 py-6 flex justify-between space-x-5">
            <Link to={item?.PublicURL} target="_blank">
              <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded  shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                View
              </button>
            </Link>

            <button
              class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
              onClick={handleDownload}
            >
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
