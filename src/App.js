import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <h1>hi MrAman here</h1>
    </div>
  );
};

export default App;
