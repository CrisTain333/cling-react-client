import React, { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import { router } from "./routes/routes";
const App = () => {
  const { setUser, setIsAuthenticate } = useContext(AuthContext);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/api/v1/user/me", {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data?.data);
          setIsAuthenticate(true);
        })
        .catch((error) => {
          setUser({});
          setIsAuthenticate(false);
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
