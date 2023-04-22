import React, { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import { router } from "./routes/routes";
const App = () => {
  const { setUser, setIsAuthenticate, setLoading, isAuthenticate } =
    useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const getUser = () => {
      fetch("https://cling-task-server.onrender.com/api/v1/user/me", {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUser(data?.data);
          setIsAuthenticate(true);
          setLoading(false);
        })
        .catch((error) => {
          setUser("");
          setIsAuthenticate(false);
          setLoading(false);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
