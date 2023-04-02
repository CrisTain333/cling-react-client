import Login from "../pages/Login";
import User from "../pages/User";
import Layout from "../Layout/Layout";
import Statuses from "../pages/Statuses";
import PrivateRoute from "./PrivatePage";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <User />,
      },
      {
        path: "/status",
        element: <Statuses />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
