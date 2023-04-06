import React, { useEffect, useState } from "react";

function UserStatusPage() {
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const getUserStatus = () => {
      fetch("https://cling-task-server.onrender.com/api/v1/document/document_find/(email)", {
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
          setUserStatus(data?.data);
        })
        .catch((error) => {
          console.log(error, "line 28 App.js");
          setUserStatus("");
        });
    };
    getUserStatus();
  }, []);

  return (
    <div>
      {userStatus ? (
        <p>{userStatus.email} </p>

      ) : (
        <p>Loading status...</p>
      )}
    </div>
  );
}



export default UserStatusPage;
