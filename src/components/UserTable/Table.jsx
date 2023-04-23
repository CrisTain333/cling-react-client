import React, { useState } from "react";
import swal from "sweetalert";
import UpdateUserModal from "../UpdateUserModal/UpdateUserModal";
import { Link } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../config/const";

const Table = ({ data, refetch }) => {
  // function for updating the user details

  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleDeleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${BACKEND_BASE_URL}/api/v1/user/delete-user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            swal("user has been deleted!", {
              icon: "success",
            });
            refetch();
          });
      } else {
        swal("User is safe!");
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length < 0 && <p>No user</p>}
            {data?.data?.map((e, i) => {
              return (
                <tr key={e._id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td className="flex justify-center">
                    <label
                      onClick={() => {
                        setShowUpdateUserModal(true);
                        setIndex(i);
                      }}
                      htmlFor="my-modal"
                      className="btn bg-sky-400 text-white border-none w-22 h-10 px-5 m-1 w-20 text-sm font-mono rounded-md"
                      // value="Login"
                    >
                      Update
                    </label>
                    <button
                      className="btn bg-red-500 text-white border-none w-22 h-10 px-5 m-1 w-20 text-sm font-mono rounded-md"
                      onClick={() => handleDeleteUser(e._id)}
                    >
                      Delete
                    </button>

                    <Link
                      to={`/users/${e._id}/status`}
                      className="btn bg-green-500 text-sm text-white border-none h-10 font-mono px-5 m-1 w-20 rounded-md"
                    >
                      Status
                    </Link>

                    <button
                      className="btn bg-gray-500 text-sm text-white border-none w-30 h-10  m-1 font-mono w-20 rounded-md"
                      onClick={() => {
                        //navigate to documnets
                      }}
                    >
                      Document
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
        {showUpdateUserModal && (
          <UpdateUserModal
            setShowUpdateUserModel={setShowUpdateUserModal}
            index={index}
            data={data.data}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default Table;
