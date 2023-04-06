import Login from "../pages/Login";
import User from "../pages/User";
import Layout from "../Layout/Layout";
import Statuses from "../pages/Statuses";
import Documents from "../pages/Documents";
import Profile from "../components/Profile/Profile";

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
      {
        path: "/status",
        element: <Statuses />,
      },
      {
        path: "/documents",
        element: <Documents />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
