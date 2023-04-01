import React, { useState } from "react";
import swal from "sweetalert";
import UpdateUserModal from "../UpdateUserModal/UpdateUserModal";

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
        fetch(
          `https://cling-task-server.onrender.com/api/v1/user/delete-user/${id}`,
          {
            method: "DELETE",
          }
        )
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
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.length < 0 && <p>No user</p>}
            {data?.data.map((e, i) => {
              return (
                <tr key={e._id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>
                    <label
                      onClick={() => {
                        setShowUpdateUserModal(true);
                        setIndex(i);
                      }}
                      htmlFor="my-modal"
                      className="btn bg-sky-400 text-white border-none"
                      // value="Login"
                    >
                      Update
                    </label>
                  </td>
                  <th>
                    <button
                      className="btn bg-red-500 text-white border-none"
                      onClick={() => handleDeleteUser(e._id)}
                    >
                      Delete
                    </button>
                  </th>
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
