import Login from "../pages/Login";
import User from "../pages/User";
import Layout from "../Layout/Layout";
import Statuses from "../pages/Statuses";
import Documents from "../pages/Documents";
import UserStatusPage from "../pages/UserStatusPage";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import EditProfile from "../components/Profile/EditProfile/EditProfile";

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
          <AdminRoute>
            <PrivateRoute>
              <User />
            </PrivateRoute>
          </AdminRoute>
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
      {
        path: "/profile/edit",
        element: (
          <PrivateRoute>
            <EditProfile />
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
