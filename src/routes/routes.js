import Login from "../pages/Login";
import User from "../pages/User";
import Layout from "../Layout/Layout";
import Statuses from "../pages/Statuses";
import Documents from "../pages/Documents";
import UserStatusPage from "../pages/UserStatusPage";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter, Routes } = require("react-router-dom");

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
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "/status",
        element: (
          <PrivateRoute>
            <Statuses />
          </PrivateRoute>
        ),
      },
      {
        path: "/documents",
        element: (
          <PrivateRoute>
            <Documents />
          </PrivateRoute>
        ),
      },
      {
        path: "/users/:id/status",
        element: (
          <PrivateRoute>
            <UserStatusPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
