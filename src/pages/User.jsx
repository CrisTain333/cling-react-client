import React from "react";
<<<<<<< Updated upstream

const User = () => {
  return (
    <div>
      <p>User Page</p>
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import DeletePopup from "./DeleteModal";

const User = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState('');
  const [userList, setUserList] = useState([
    {
      Name: 'Tapas',
      Email: 'tapas@gmail.com'
    },
    {
      Name: 'Sasuke',
      Email: 'saske@gmail.com'
    },
    {
      Name: 'Kakashi',
      Email: 'kakashi@gmail.com'
    },
  ])

  // const handleDelete = (user) => {
    // setUserList(
    //   userList.filter((item) => item != user)
    // )
  // }
  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    setUserList(
      userList.filter((item) => item !== userToDelete)
    );
    setShowDeletePopup(false);
  };


  const handleAdd = () => {
    setUserList([...userList, {Name: "DemoUser", Email: "Demo@gmail.com"}])
  }

  return (
    <div>
      <table className="table-auto w-1/2">
        <thead className="">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map((user, index) => 
            <tr key={index} >
              <td className="p-3 text-center">{user.Name}</td>
              <td className="p-3 text-center">{user.Email}</td>
              <td>
                <Link 
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</Link>
              </td>
              <td>
                <button 
                  onClick={() => handleDelete(user)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Remove</button></td>
            </tr>
            )
          }
        </tbody>
      </table>
      <button 
        onClick={() => handleAdd()}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded ml-72 mt-16">Add User</button>
        {showDeletePopup && (
        <DeletePopup
        user={userToDelete}
          onCancel={handleCancelDelete}
          onDelete={handleConfirmDelete}
        />
      )}
>>>>>>> Stashed changes
    </div>
  );
};
export default User;