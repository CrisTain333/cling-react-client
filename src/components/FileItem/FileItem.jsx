import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const FileItem = ({ item }) => {
  const url = item.filename;
  const handleOpen = () => {
    window.open(`https://${url}`, "_blank");
  };
  const handleDelete = (id) => {
    // write the delete function here
  };
  console.log("ITEM", item);
  let fname = item.filename;
  fname.replace("\\", "/");
  let val = fname.split("/");
  val = val.slice(-1);
  // let val= item.filename.split("/").split("\\").slice(-1).length<20 ?item.filename:(item.filename.slice(0,20)+"...")

  return (
    // <div className='flex my-8'>
    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
    //     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    // </svg>

    //     <button onClick={handleOpen}>Open Pdf</button>

    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-4 cursor-pointer"
    // onClick={handleDelete(item._id)}>
    //     <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    // </svg>
    // </div>

    <div
      className="overflow-x-auto my-2"
      style={{ border: "0.1rem solid #a557f7", borderRadius: "1rem" }}
    >
      <table className="table w-full">
        <tbody>
          <tr>
            <td
              className="font-bold"
              style={{
                marginTop: "0px",
                width: "20%",
                paddingTop: "0.1rem",
                paddingBottom: "0.1rem",
              }}
            >
              {item.userId ? item.userId : "Employee"}
            </td>
            <td
              style={{
                marginTop: "0px",
                paddingTop: "0.1rem",
                width: "40%",
                paddingBottom: "0.1rem",
              }}
            >
              {val}
            </td>
            <td
              style={{
                marginTop: "0px",
                paddingTop: "0.1rem",
                width: "15%",
                paddingBottom: "0.1rem",
              }}
            >
              <button className="btn" onClick={handleOpen}>
                Open Pdf
              </button>
            </td>
            <td
              style={{
                marginTop: "0px",
                paddingTop: "0.1rem",
                width: "5%",
                paddingBottom: "0.1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </td>
            <td style={{ marginTop: "0px", width: "5%" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-4 cursor-pointer"
                onClick={handleDelete(item._id)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FileItem;
