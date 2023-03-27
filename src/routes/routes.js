import Login from "../pages/Login";
import User from "../pages/User";
import Layout from "../Layout/Layout";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
