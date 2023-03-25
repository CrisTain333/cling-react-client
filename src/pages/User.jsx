import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const User = () => {

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

  const handleDelete = (user) => {
    setUserList(
      userList.filter((item) => item != user)
    )
  }

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
    </div>
  );
};

export default User;
