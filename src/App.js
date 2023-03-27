import React from "react";
import { RouterProvider } from "react-router-dom";
import UserState from "./components/UserTable/UserState";
import { router } from "./routes/routes";
const App = () => {
  return (
    <div>
      <UserState>
      <RouterProvider router={router}></RouterProvider>
      </UserState>
    </div>
  );
};

export default App;
